import React, { useEffect, useState } from "react";
import Head from "next/head";
import { URL } from "../utils";
import { PROJECT } from "../interfaces";
import { Main } from "../components/Main";
import { Heading1 } from "../components/Heading";
import { Grid, GridItem, Link, Description, Name } from "../components/Grid";

export async function getStaticProps() {
  const res = await fetch(`${URL}/api/all-projects`);
  const data = await res.json();

  return {
    props: {
      staticData: data.projects || [],
    },
  };
}

function Projects({ staticData }: { staticData: PROJECT[] }) {
  const [data, setData] = useState<PROJECT[]>(staticData);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${URL}/api/all-projects`);
      const data = await res.json();
      setData(data?.projects);
    }
    fetchData();
  }, []);

  return (
    <Main>
      <Head>
        <title>Projects - Swapnadeep</title>
        <meta
          name="description"
          content="Projects made by Swapnadeep Mohapatra"
        />
      </Head>
      <Heading1>All My Projects</Heading1>
      <Grid>
        {data?.map((project: PROJECT) => (
          <Link key={project._id} href={`projects/${project._id}`}>
            <GridItem>
              <Name>{project.name}</Name>
              <Description>
                {project.shortTechStack || project.techStack}
              </Description>
            </GridItem>
          </Link>
        ))}
      </Grid>
    </Main>
  );
}

export default Projects;
