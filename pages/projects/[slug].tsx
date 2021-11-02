import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PROJECT } from "../../interfaces";
import { URL } from "../../utils";
import { Main } from "../../components/Main";
import { Heading1Left as Heading1, Heading2 } from "../../components/Heading";
import Head from "next/head";

interface ProjectProps {
  slug: string;
}

export async function getServerSideProps(context: { query: ProjectProps }) {
  return { props: { slug: context.query.slug } };
}

function Project({ slug }: ProjectProps) {
  const [data, setData] = useState<PROJECT>();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${URL}/api/get-project/${slug}`);
      const data = await res.json();
      setData(data.project);
    }
    fetchData();
  }, [slug]);

  if (!data) {
    return (
      <Main>
        <Heading1>Loading...</Heading1>
      </Main>
    );
  }

  return (
    <Main>
      <Head>
        <title>{data.name} - Swapnadeep</title>
        <meta
          name="description"
          content={`${data.name} made by Swapnadeep Mohapatra`}
        />
      </Head>
      <Heading1>{data.name}</Heading1>
      <Heading2>{data.desc}</Heading2>
      <ProjectPictures>
        <ProjectPicture src={data.image} alt={`screenshot of ${data.name}`} />
      </ProjectPictures>
      <ProjectDesc
        dangerouslySetInnerHTML={{ __html: data.fullDesc || "" }}
      ></ProjectDesc>
      <Heading2>
        <strong>Tech Stack: </strong>
        {data.techStack}
      </Heading2>
      <Heading2>
        <strong>Hosted Link: </strong>
        <ProjectLink href={data.link} target="_blank" rel="noopener noreferrer">
          {data.link}
        </ProjectLink>
      </Heading2>
      <Heading2>
        <strong>GitHub Link: </strong>
        <ProjectLink href={data.link} target="_blank" rel="noopener noreferrer">
          {data.codeLink || "https://github.com/swapnadeepmohapatra"}
        </ProjectLink>
      </Heading2>
      {data.name === "e-SwachhBin" && (
        <div>
          <Heading2>
            <strong>Tweet: </strong>
          </Heading2>
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              The young bright children showcased their innovation and
              creativity in scientific projects during the Children Science
              Congress that was organised as a part of{" "}
              <a href="https://twitter.com/hashtag/ISC2020?src=hash&amp;ref_src=twsrc%5Etfw">
                #ISC2020
              </a>
              . <a href="https://t.co/yG3DeHmSpp">pic.twitter.com/yG3DeHmSpp</a>
            </p>
            &mdash; PIB India (@PIB_India){" "}
            <a href="https://twitter.com/PIB_India/status/1213380586405892096?ref_src=twsrc%5Etfw">
              January 4, 2020
            </a>
          </blockquote>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </div>
      )}
    </Main>
  );
}

export default Project;

const ProjectLink = styled.a`
  font-size: 1.2rem;
  font-weight: normal;
  margin: 0;
  margin-bottom: 0.5rem;
  text-decoration: underline dotted;
  // color: #00a0e9;
  color: #08abff;
`;

const ProjectPictures = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0rem;
`;

const ProjectDesc = styled.p`
  font-size: 1.1rem;
  margin: 0;
  margin-bottom: 2rem;
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
