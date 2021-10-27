import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import { URL } from "../utils";
import { PROJECT } from "../interfaces";

export async function getStaticProps() {
  const res = await fetch(`${URL}/api/all-projects`);
  const data = await res.json();

  return {
    props: {
      staticData: data.projects,
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
      <ProjectGrid>
        {data?.map((project: PROJECT) => (
          <Link key={project._id} href={`projects/${project._id}`}>
            <Project>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDesc>
                {project.shortTechStack || project.techStack}
              </ProjectDesc>
            </Project>
          </Link>
        ))}
      </ProjectGrid>
    </Main>
  );
}

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 1rem;
`;

const Heading1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  justify-content: center;
  align-items: stretch;
  margin: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Project = styled.div`
  background: #f0faff;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #ccc;
  // border: 1px solid rgb(0, 174, 255);
  border-radius: 5px;
  will-change: transform;
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 5px #ccc;
    // box-shadow: 0px 0px 5px rgb(0, 174, 255);
  }
`;

const ProjectName = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const ProjectDesc = styled.p`
  margin: 0;
  padding: 0;
  text-align: left;
  margin-top: 1rem;
`;

export default Projects;
