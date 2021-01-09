import React from 'react';
import rehypeReact from 'rehype-react';
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  
  @media(max-width: 1200px){
    font-size:2.5rem;
  }
  `;

const Div = styled.div`
@media(max-width: 1200px){
    --deckgo-highlight-code-font-size: 1.6rem;
  }
`;

const Paragraph = styled.p`
  font-size: 2.1rem;
  font-weight: 300;
  line-height: 3.2rem;

  @media(max-width: 1200px){
    font-size:1.6rem;
    line-height: 2.6rem;
  }
`;

export const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: Title,
    p: Paragraph,
    div: Div
  }
}).Compiler;

export const PostStyles = styled.div`
  padding: 20px;
  margin-top: 20px;
`;