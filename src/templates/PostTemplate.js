import React from 'react';
import { graphql } from 'gatsby';
import { PostStyles, renderAst } from '../styles/PostStyles';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();



export default function PostTemplate({data}) {
  const {post} = data;
  return (
    <PostStyles>
      {renderAst(post.htmlAst)}
    </PostStyles>
  );
}

export const query = graphql`
 query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`;