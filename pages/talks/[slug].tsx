import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TALK } from "../../interfaces";
import { URL } from "../../utils";
import Head from "next/head";
import { Heading1Left as Heading1, Heading2 } from "../../components/Heading";
import { Main } from "../../components/Main";

interface TalkProps {
  slug: string;
  data?: TALK;
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps(context: { params: TalkProps }) {
  console.log(context);
  const slug = context.params.slug;

  const res = await fetch(`${URL}/api/get-talk/${slug}`);
  const data = await res.json();

  return { props: { slug: context.params.slug, data: data.talk } };
}

function Talk({ data: talk }: TalkProps) {
  if (!talk) {
    return (
      <Main>
        <Heading1>Loading...</Heading1>
      </Main>
    );
  }

  return (
    <Main>
      <Head>
        <title>{talk.name} - Swapnadeep</title>
        <meta
          name="description"
          content={`${talk.name} talk given by Swapnadeep Mohapatra`}
        />
        {talk.name === "Getting Started with GraphQL for Frontend Devs" && (
          <script async src="https://platform.twitter.com/widgets.js" />
        )}
      </Head>
      <LessWidthDiv>
        <Heading1>{talk.name}</Heading1>
        <TalkDesc>{talk.desc}</TalkDesc>
        <Heading2>
          <strong>Slides: </strong>
          <TalkLink href={talk.slides}>{talk.slides}</TalkLink>
        </Heading2>
        <br />
        <Heading2>
          <strong>Recording:</strong>
        </Heading2>
        <IFRAMEContainer>
          <IFRAME
            // width="500"
            // height="549"
            src="https://www.youtube.com/embed/cRK1MZ6x7FI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></IFRAME>
        </IFRAMEContainer>
        {talk.name === "Getting Started with GraphQL for Frontend Devs" && (
          <div>
            <Heading2>
              <strong>Tweet: </strong>
            </Heading2>
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                I gave my first tech talk yesterday. The topic was Getting
                Started With GraphQL. I talked about What GraphQL is. Query,
                Mutation & Subscriptions. Talked about React with Apollo and
                also did a bit of testing.
                <br />
                <br />
                It was a great experience giving my first talk in front of 150+
                folks.
                <a href="https://t.co/S2iFKkQDAP">pic.twitter.com/S2iFKkQDAP</a>
              </p>
              &mdash; Swapnadeep Mohapatra (@swapnadeeptukk){" "}
              <a href="https://twitter.com/swapnadeeptukk/status/1457205201472008193?ref_src=twsrc%5Etfw">
                November 7, 2021
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

const TalkLink = styled.a`
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 1rem;
`;

const TalkDesc = styled.p`
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 1rem;
`;

const LessWidthDiv = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

const IFRAME = styled.iframe`
  // position: relative;
  // overflow: hidden;
  // width: 100%;
  // // padding-top: 56.25%;
  // padding-top: 56.25%;
`;

const IFRAMEContainer = styled.div`
  // position: absolute;
  // top: 0;
  // left: 0;
  // bottom: 0;
  // right: 0;
  // width: 100%;
  // height: 100%;
`;

export default Talk;
