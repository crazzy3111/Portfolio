import React from "react";
import styled from "@emotion/styled";

const FooterSection = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100px;
  position: relative;
  background-color: #333; /* Optional: Add a background color if needed */
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    position: absolute;
    bottom: 2rem;
    color: #fff;
    text-align: center;

    a {
      color: #fff;
      text-decoration: none;
      margin: 0 1rem;
      font-size: 1.2rem;
      transition: color 0.3s ease;

      &:hover {
        color: #ddd; /* Optional: Change color on hover */
      }
    }
  }
`;

function Footer() {
  return (
    <FooterSection>
      <span>
        <a
          href="https://www.linkedin.com/in/ankit-kumar-b23796223/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/crazzy3111  "
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </span>
    </FooterSection>
  );
}

export default Footer;
