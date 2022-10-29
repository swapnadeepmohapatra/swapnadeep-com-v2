import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Main } from "../../components/Main";
import styled from "styled-components";

const slides = [
  {
    slug: "graphql",
    link: "https://docs.google.com/presentation/d/1wsDEp78fnLnQRj1AM-Blxw4PIWA4ebgDtwHrObFvV0M/edit#slide=id.geee995da10_0_4",
    name: "Getting Started with GraphQL for Frontend Devs",
  },
  {
    slug: "webpack",
    link: "https://docs.google.com/presentation/d/1XfAkFKRe9C1Bh-SLJKENad9qJmzDBMhvjuvQv9_7b-s/edit?usp=sharing",
    name: "Understanding Webpack by Building Your Own",
  },
];

function Slides() {
  return (
    <Main>
      <Head>
        <title>Slides - Swapnadeep</title>
        <meta name="description" content="Slides by Swapnadeep Mohapatra" />
      </Head>
      <LessWidthDiv>
        <h1>Slides</h1>
        <div>
          <ol>
            {slides.map((slide) => (
              <li key={slide.slug}>
                <Link href={`slides/${slide.slug}`} passHref>
                  <h2>{slide.name}</h2>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </LessWidthDiv>
    </Main>
  );
}

export default Slides;

const LessWidthDiv = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;
