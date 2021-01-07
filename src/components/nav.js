import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const NavStyles = styled.nav`
  background-color: var(--grey);
  height: 50px;
  .nav-container {
    height: 100%;
    max-width: 1400px;
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
`;

export default function Nav() {
  return (
    <NavStyles>
      <div className="nav-container">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/posts/test">
            <li>Test</li>
          </Link>
        </ul>
      </div>
    </NavStyles>
  );
}
