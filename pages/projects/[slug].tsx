import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PROJECT } from "../../interfaces";
import { URL } from "../../utils";

interface ProjectProps {
  slug: string;
}

export async function getServerSideProps(context: { query: ProjectProps }) {
  return { props: { slug: context.query.slug } };
}

function Project({ slug }: ProjectProps) {
  const [data, setData] = useState<PROJECT>({
    desc: "",
    image: "",
    important: false,
    link: "",
    name: "",
    techStack: "",
    _id: "",
  });

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${URL}/api/get-project/${slug}`);
      const data = await res.json();
      setData(data.project);
    }
    fetchData();
  }, [slug]);

  return (
    <div>
      <Heading1>{data.name}</Heading1>
      <Heading2>{data.desc}</Heading2>
      <ProjectPictures>
        <ProjectPicture src={`https://swapnadeep.com${data.image}`} />
      </ProjectPictures>
      <Heading2>Tech Stack: {data.techStack}</Heading2>
      <Heading2>{data.link}</Heading2>
      {/* <ProjectDesc>{data.honorDescription}</ProjectDesc> */}
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

  min-height: 300px;

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
  }
`;
