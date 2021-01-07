import React from 'react';
import { graphql } from 'gatsby';

export default function PostTemplate({data}) {
  const {post} = data;
  return (
    <div dangerouslySetInnerHTML={{__html: post.html}}/>
  );
}

export const query = graphql`
 query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;