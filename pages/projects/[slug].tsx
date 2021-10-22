import React from "react";
import styled from "styled-components";

export async function getServerSideProps(context: any) {
  const res = await fetch(
    `https://v2.swapnadeep.com/api/get-project/${context.query.slug}`
  );
  const data = await res.json();

  return { props: { project: data.project } };
}

function Project({ project }: { project: any }) {
  return (
    <div>
      <Heading1>{project.name}</Heading1>
      <Heading2>{project.desc}</Heading2>
      <ProjectPictures>
        <ProjectPicture src={`https://swapnadeep.com${project.image}`} />
      </ProjectPictures>
      <Heading2>Tech Stack: {project.techStack}</Heading2>
      <Heading2>{project.link}</Heading2>
      <ProjectDesc>{project.honorDescription}</ProjectDesc>
    </div>
  );
}

export default Project;

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

const ProjectPictures = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0rem;
`;

const ProjectDesc = styled.p`
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 1rem;
`;

const ProjectPicture = styled.img`
  width: 100%;
  margin-bottom: 1rem;
`;
