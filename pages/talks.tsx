import React, { useEffect, useState } from "react";
import { TALK } from "../interfaces";
import { URL } from "../utils";
import { Heading1 } from "../components/Heading";
import { Main } from "../components/Main";
import Head from "next/head";
import { GridItem, Grid, Description, Link, Name } from "../components/Grid";

export async function getStaticProps() {
  const res = await fetch(`${URL}/api/all-talks`);
  const data = await res.json();

  return {
    props: {
      staticData: data.talks,
    },
  };
}

function Talks({ staticData }: { staticData: TALK[] }) {
  const [data, setData] = useState<TALK[]>(staticData);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${URL}/api/all-talks`);
      const data = await res.json();
      setData(data?.talks);
    }
    fetchData();
  }, []);

  return (
    <Main>
      <Head>
        <title>Talks - Swapnadeep</title>
        <meta
          name="description"
          content="Talks given by Swapnadeep Mohapatra"
        />
      </Head>
      <Heading1>All My Talks</Heading1>
      <Grid>
        {data?.map((talk: TALK) => (
          <Link key={talk._id} href={`talks/${talk._id}`}>
            <GridItem>
              <Name>{talk.name}</Name>
              <Description>{talk.desc}</Description>
            </GridItem>
          </Link>
        ))}
      </Grid>
    </Main>
  );
}

export default Talks;
