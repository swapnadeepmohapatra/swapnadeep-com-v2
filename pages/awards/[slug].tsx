import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AWARD } from "../../interfaces";
import { Heading1Left as Heading1, Heading2 } from "../../components/Heading";
import { Main } from "../../components/Main";
import { URL } from "../../utils";
import Head from "next/head";

interface AwardProps {
  slug: string;
  data?: AWARD;
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps(context: { params: AwardProps }) {
  console.log(context);
  const slug = context.params.slug;

  const res = await fetch(`${URL}/api/get-prize/${slug}`);
  const data = await res.json();

  return { props: { slug: context.params.slug, data: data.prize } };
}

function Award({ slug, data: award }: AwardProps) {
  if (!award) {
    return (
      <Main>
        <Heading1>Loading...</Heading1>
      </Main>
    );
  }

  const images = award?.images;

  const AwardPicture = styled.img`
    @media (min-width: 600px) {
      width: ${images ? 100 / images?.length - 1 : "100"}%;
    }
    margin-bottom: 1rem;

    min-height: ${300 / images?.length}px;

    background-color: #f1f1f1;
    border-radius: 5px;
    transition-duration: 0.8s;

    /* Animation */
    -webkit-animation-duration: 1.6s;
    -moz-animation-duration: 1.6s;
    -o-animation-duration: 1.6s;
    animation-duration: 1.6s;
    -webkit-animation-name: pulseAnimation;
    -moz-animation-name: pulseAnimation;
    -o-animation-name: pulseAnimation;
    animation-name: pulseAnimation;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
    -o-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;

    @keyframes pulseAnimation {
      0% {
        background-color: #f1f1f1;
      }

      25% {
        background-color: #9c9c9c;
      }

      50% {
        background-color: #c1c1c1;
      }

      70% {
        background-color: #d8d8d8;
      }

      @media (max-width: 600px) {
        width: 100%;
      }
    }
  `;

  return (
    <Main>
      <Head>
        <title>{award.name} - Swapnadeep</title>
        <meta
          name="description"
          content={`${award.name} won by Swapnadeep Mohapatra`}
        />
        <meta
          property="og:image"
          content={`https://og-image-generator-test.vercel.app/Award.png?desc=${award.name}`}
        />
      </Head>
      <LessWidthDiv>
        <Heading1>{award.name}</Heading1>
        <Heading2>
          {award.honorIssuer} | {award.honorDate}
        </Heading2>
        <AwardPictures>
          {images?.map((image: string, index: number) => (
            <AwardPicture key={index} src={image} />
          ))}
        </AwardPictures>
        <AwardDesc>{award.honorDescription}</AwardDesc>
        {award.name === "107th Indian Science Congress" && (
          <div>
            <Heading2>
              <strong>Tweet: </strong>
            </Heading2>
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                The young bright children showcased their innovation and
                creativity in scientific projects during the Children Science
                Congress that was organised as a part of{" "}
                <a href="https://twitter.com/hashtag/ISC2020?src=hash&amp;ref_src=twsrc%5Etfw">
                  #ISC2020
                </a>
                .{" "}
                <a href="https://t.co/yG3DeHmSpp">pic.twitter.com/yG3DeHmSpp</a>
              </p>
              &mdash; PIB India (@PIB_India){" "}
              <a href="https://twitter.com/PIB_India/status/1213380586405892096?ref_src=twsrc%5Etfw">
                January 4, 2020
              </a>
            </blockquote>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            ></script>
          </div>
        )}
      </LessWidthDiv>
    </Main>
  );
}

export default Award;

const AwardPictures = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0rem;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const AwardDesc = styled.p`
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 1rem;
`;

const LessWidthDiv = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.maxWidth}) {
    margin: 0;
  }
`;
