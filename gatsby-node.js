const { createFilePath } = require("gatsby-source-filesystem");
const { paginate } = require('gatsby-awesome-pagination');
const path = require('path');

// Add a slug field for every md files based on their name
exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions;
  if(node.internal.type === 'MarkdownRemark'){
    const slug = createFilePath({node, getNode, basePath: 'posts'});
    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
};

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  const result = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    const postTemplate = path.resolve('./src/templates/PostTemplate.js');
    createPage({
      path: `/posts${node.fields.slug}`,
      component: postTemplate,
      context: {
        slug: node.fields.slug
      }
    })
  })

  paginate({
    createPage,
    items: result.data.allMarkdownRemark.edges,
    itemsPerPage: parseInt(process.env.GATSBY_POSTS_PER_PAGE),
    pathPrefix: '/blog',
    component: path.resolve('./src/pages/index.js')
  })


}