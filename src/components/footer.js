import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  border-top: 2px solid var(--grey);
  padding: 20px;
  margin-top: 50px;

  .footer-container {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img {
      width: 50px;
    }
  }

  .copyright {
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    color: #cdcdcd;
    margin-top: 20px;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="footer-container">
        <a href="https://twitter.com/TheFoolStuckDev" target="new" title="twitter">
          <img src="/images/twitter.svg" alt="twitter"/>
        </a>
        <a href="https://github.com/TheFoolStuckDev" target="new" title="github">
          <img src="/images/github-icon.svg" alt="github"/>
        </a>
        <a href="https://www.youtube.com/channel/UC4NA4GbHuGAaktoA2i1grHg" target="new" title="youtube">
          <img src="/images/youtube.svg" alt="youtube"/>
        </a>
        {/* <a href="mailto:thefoolstuckdev@gmail.com" target="new" >
          <img src="/images/google-gmail.svg" alt="gmail"/>
        </a> */}
      </div>
      <div className="copyright">
        <span>	&copy; 2021 FoolStuckDev All rights reserved</span>
      </div>
    </FooterStyles>
  );
}
