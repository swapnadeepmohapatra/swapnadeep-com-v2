import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import { WORK } from "../interfaces";
import { URL, Foo } from "../utils";
import { Heading1 } from "../components/Heading";
import { Main } from "../components/Main";

export async function getStaticProps() {
  const res = await fetch(`${URL}/api/all-works`);
  const data = await res.json();

  return {
    props: {
      staticData: data.works,
    },
  };
}

function Work({ staticData }: { staticData: WORK[] }) {
  const [works, setWorks] = useState<WORK[]>(staticData);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${URL}/api/all-works`);
      const data = await res.json();
      setWorks(data?.works);
    }
    fetchData();
  }, []);

  return (
    <Main>
      <Head>
        <title>Work - Swapnadeep</title>
        <meta name="description" content="Work done by Swapnadeep Mohapatra" />
      </Head>
      <Heading1>Work Experiences</Heading1>
      <Works>
        {works.map((exp: WORK) => (
          <EachWork key={exp._id}>
            <h2>{exp.title}</h2>
            <h3>
              {exp.company} • {exp.type}
            </h3>
            <h3>
              {exp.date} • {exp.time}
            </h3>
            <p>{exp.jobDesc}</p>
            <p>
              <strong>Tech Stack:</strong> {exp.techStack}
            </p>
          </EachWork>
        ))}
      </Works>
      <Foo />
    </Main>
  );
}

export default Work;

const Works = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
`;

const EachWork = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem 0;
  * {
    margin: 0;
    padding: 0;
  }
  h3 {
    padding: 0.2rem 0;
  }
  p {
    padding: 0.5rem 0;
  }
`;
