import React from 'react';
import rehypeReact from 'rehype-react';
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.8rem;
`;

export const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: Title,
    p: Paragraph
  }
}).Compiler;

export const PostStyles = styled.div`
  padding: 20px;
  margin-top: 20px;
`;