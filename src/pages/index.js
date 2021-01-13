import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import Img from 'gatsby-image';

const IndexStyles = styled.div`
  .links-container {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }
  a {
    text-decoration: none;
    color: var(--black);

    
    &[disabled]{
      pointer-events: none;
      color: var(--grey);
    }
  }
`

const PostsGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 25px;
  margin-top: 20px;
  a {
    text-decoration: none;
    color: var(--black);
  }
`;

const PostStyles = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr 50px;
  grid-template-columns: 1fr 2fr;
  grid-auto-rows: minmax(min-content, max-content);
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid var(--grey);
  overflow: hidden;
  grid-column-gap: 20px;
  font-weight: 300;

  h3 {
    font-weight: normal;
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 1.8rem;
    text-overflow: ellipsis;
  }
  .gatsby-image-wrapper {
    grid-row: span 3;
  }

  .footer {
    display: flex;
    justify-content: space-between;
  }

  span {
    color: #cdcdcd;
    font-size: 1.6rem;
  }



  @media(max-width:1200px){
    grid-template-rows: 1fr 1fr 50px;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    h3{
      font-size: 2rem;
    }

    p {
      font-size: 1.6rem;
    }

    .gatsby-image-wrapper{
      width: 100%;
      justify-self: center;
      max-height: 200px;
    }

    span {
      font-size: 1.4rem;
    }
  }
`;



export default function IndexPage({data, pageContext}){
  const posts = data.posts.edges;
  let {pageNumber, humanPageNumber, previousPagePath, nextPagePath, numberOfPages} = pageContext;
  if(!humanPageNumber){
    pageNumber = 0;
    humanPageNumber = 1;
    previousPagePath= "/";
    nextPagePath = "/blog/2";
    numberOfPages = Math.floor(data.posts.totalCount / parseInt(process.env.GATSBY_POSTS_PER_PAGE)); 
  }
  
  const PostItems = posts.map((p, index) => {
    const date = new Date(p.node.frontmatter.date);
    return (
      <Link to={`/posts${p.node.fields.slug}`} key={index}>
        <PostStyles>
          <Img fluid={p.node.frontmatter.thumbnail?.childImageSharp?.fluid} width="200" height="125" alt={p.node.frontmatter.title}/>
            <h3>{p.node.frontmatter.title}</h3>
          <p>{p.node.frontmatter.excerpt}</p>
          <div className="footer">
            <span className="date">{date.toDateString()}</span>
            <span className="timer">⏲{Math.round(p.node.wordCount.words/250)} minutes</span>
          </div>
        </PostStyles>
      </Link>
    );
  });
  return (
  <IndexStyles>
    <SEO title="Home" />
    <PostsGrid>
      {PostItems}
    </PostsGrid>
    <div className="links-container">
      <Link disabled={pageNumber === 0} to={previousPagePath}>Previous</Link>
      <Link disabled={humanPageNumber === numberOfPages} to={nextPagePath}>Next</Link>
    </div>
  </IndexStyles>
);
} 

export const query = graphql`
query ($skip: Int = 0, $limit: Int = 4){
  posts: allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit 
    ){
    totalCount
    edges {
      node {
        id
        frontmatter  {
          title
          excerpt
          date
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 250){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
        wordCount {
          words
        }
      }
    }
  }
}
`;
