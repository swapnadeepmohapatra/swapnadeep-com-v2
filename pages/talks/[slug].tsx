import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TALK } from "../../interfaces";
import { URL } from "../../utils";
import Head from "next/head";
import { Heading1Left as Heading1, Heading2 } from "../../components/Heading";
import { Main } from "../../components/Main";

interface TalkProps {
  slug: string;
}

export async function getServerSideProps(context: { query: TalkProps }) {
  return { props: { slug: context.query.slug } };
}
function Talk({ slug }: TalkProps) {
  const [talk, setTalk] = useState<TALK>();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${URL}/api/get-talk/${slug}`);
      const data = await res.json();

      setTalk(data.talk);
    }
    fetchData();
  }, [slug]);

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
