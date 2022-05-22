import React, { Fragment } from "react";
import styled from "styled-components";
import { Github, Instagram, Linkedin, Twitter } from "@styled-icons/bootstrap";
import { Mail } from "@styled-icons/entypo/Mail";
import { game_log } from "../../utils/Fun";

function Footer() {
  return (
    <>
      <_footer>
        <>
          {game_log()}
          <Contact>
            <Fragment>
              Connect with me on
              <div>
                <Social
                  href="https://github.com/swapnadeepmohapatra"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Github"
                >
                  <Github />
                </Social>
                <Social
                  href="https://www.instagram.com/swapnadeep_mohapatra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <Instagram />
                </Social>
                <Social
                  href="https://www.linkedin.com/in/swapnadeep-mohapatra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Linkedin"
                >
                  <Linkedin />
                </Social>
                <Social
                  href="https://twitter.com/swapnadeeptukk"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <Twitter />
                </Social>
                <Social href="mailto:hello@swapnadeep.com" title="Email">
                  <Mail />
                </Social>
              </div>
            </Fragment>
          </Contact>
          <ContactMid>
            For more:
            <Link
              href="https://links.swapnadeep.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              links.swapnadeep.com
            </Link>
          </ContactMid>
          <Contact>
            Reach out to me on:
            <Link
              href="mailto:hello@swapnadeep.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              hello@swapnadeep.com
            </Link>
          </Contact>
          <Line />
          <FooterText>
            {new Date().getFullYear()} © Swapnadeep Mohapatra
          </FooterText>
        </>
      </_footer>
    </>
  );
}

const _footer = styled.footer`
  background-color: #0a075a;
  color: rgba(255, 255, 255, 0.5);
  padding: 2rem 10rem;

  @media (max-width: 600px) {
    padding: 2rem 3rem;
  }
`;

const Line = styled.hr`
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const Link = styled.a`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
`;

const Contact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 0.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ContactMid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  gap: 0.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Social = styled.a`
  margin: 0.4rem;
  svg {
    height: 1.4rem;
    width: 1.4rem;
    color: rgba(255, 255, 255, 1);
  }
`;

const FooterText = styled.p`
  text-align: center;
  padding: 1rem;
  margin: 0;
`;

export default Footer;
