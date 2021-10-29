import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TALK } from "../../interfaces";
import { URL } from "../../utils";
import Head from "next/head";

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
      <Heading1>{talk.name}</Heading1>
      <TalkDesc>{talk.desc}</TalkDesc>
      <Heading2>
        <strong>Slides: </strong>
        <TalkLink href={talk.slides}>{talk.slides}</TalkLink>
      </Heading2>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  padding: 1rem;
`;

const Heading1 = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  margin-top: 1rem;
`;

const Heading2 = styled.h2`
  font-size: 1.2rem;
  font-weight: normal;
  margin: 0;
  margin-bottom: 0.5rem;
`;

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

export default Talk;
