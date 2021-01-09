import { graphql, Link, useStaticQuery } from 'gatsby';
import "@fontsource/special-elite"
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

const NavStyles = styled.nav`
  border-bottom: 1px solid var(--grey);
  /* background-color: var(--black); */

  .title {
    font-family: "Special Elite";
    font-size: 5rem;
    margin: 0;
    padding: 0;
  }

  .gatsby-image-wrapper{
    width: 180px;
  }
  .nav-container {
    height: 100%;
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  ul {
    list-style: none;
    margin: 0;
    display: flex;

    li {
      margin-right: 50px;
    }
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  @media(max-width: 1200px){
    .nav-container{
      display: grid;
      grid-template-rows: 1fr 100px;
      align-items: center;
      justify-items: center;
      /* max-height: 200px; */

      .gatsby-image-wrapper{
        width: 150px;
        justify-self: center;
      }

      .title {
        font-size: 3rem;
      }
    }
  }
`;

export default function Nav() {
  const {image} = useStaticQuery(graphql`
    query {
      image: imageSharp(fluid: {originalName: {eq: "logo_transparent.png"}}) {
        fluid(maxHeight: 200, maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `);
  console.log(image);
  return (
    <NavStyles>
      <div className="nav-container">
        <ul>
          <li>
            <Link to="/">
              <Img fluid={image?.fluid} alt="Fool Stuck Dev"/>
            </Link>
          </li>
        </ul>
        <h1 className="title">Fool Stuck Dev.</h1>
      </div>
    </NavStyles>
  );
}
