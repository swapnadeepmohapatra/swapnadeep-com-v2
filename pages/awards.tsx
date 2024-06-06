import { useEffect, useState } from "react";
import Head from "next/head";
import { URL, Bar } from "../utils";
import { AWARD } from "../interfaces";
import { Heading1 } from "../components/Heading";
import { Grid, GridItem, Link, Description, Name } from "../components/Grid";
import { Main } from "../components/Main";

export async function getStaticProps() {
  const res = await fetch(`${URL}/api/all-prizes`);
  const data = await res.json();

  return {
    props: {
      staticData: data.prizes || [],
    },
  };
}

function Awards({ staticData }: { staticData: AWARD[] }) {
  const [data, setData] = useState<AWARD[]>(staticData);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${URL}/api/all-prizes`);
      const data = await res.json();
      setData(data?.prizes);
    }
    fetchData();
  }, []);

  return (
    <Main>
      <Head>
        <title>Awards - Swapnadeep</title>
        <meta name="description" content="Awards won by Swapnadeep Mohapatra" />
      </Head>
      <Heading1>All My Awards</Heading1>
      <Grid>
        {data?.map((award: AWARD) => (
          <Link key={award._id} href={`awards/${award._id}`}>
            <GridItem>
              <Name>{award.name}</Name>
              <Description>{award.honorIssuer}</Description>
            </GridItem>
          </Link>
        ))}
      </Grid>
      <Bar />
    </Main>
  );
}

export default Awards;
