import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { AWARD, BLOGS, PROJECT, TALK } from "../interfaces";
import { URL } from "../utils";

const Home: NextPage = () => {
  const [awardsList, setAwardsList] = useState<AWARD[]>([
    {
      honorDate: "",
      honorDescription: "",
      honorIssuer: "",
      images: [""],
      important: true,
      name: "",
      _id: "",
    },
  ]);
  const [projectsList, setProjectsList] = useState<PROJECT[]>([
    {
      desc: "",
      image: "",
      important: false,
      link: "",
      name: "",
      techStack: "",
      _id: "",
    },
  ]);

  const [talksList, setTalksList] = useState<TALK[]>([]);
  const [blogList, setBlogList] = useState<BLOGS[]>([]);

  useEffect(() => {
    async function fetchData() {
      const prizesResponse = await fetch(`${URL}/api/important-prizes`);
      const prizesData = await prizesResponse.json();
      setAwardsList(prizesData.prizes);

      const projectsResponse = await fetch(`${URL}/api/important-projects`);
      const projectsData = await projectsResponse.json();
      setProjectsList(projectsData.projects);

      const blogsResponse = await fetch(`${URL}/api/important-blogs`);
      const blogsData = await blogsResponse.json();
      setBlogList(blogsData.blogs);

      const talksResponse = await fetch(`${URL}/api/important-talks`);
      const talksData = await talksResponse.json();
      setTalksList(talksData.talks);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Head>
        <title>Swapnadeep Mohapatra</title>
        <meta
          name="description"
          content="Portfolio site of Swapnadeep Mohapatra | Full Stack Developer"
        />
      </Head>
      <Main>
        <PersonalDetail>
          <h2>Hi 👋 I am Swapnadeep Mohapatra! </h2>
          <Prargraph>I&apos;m currently studying in grade 12.</Prargraph>
          <Prargraph>I love to build awesome tech.</Prargraph>
        </PersonalDetail>
        <Awards>
          <Heading3>My Awards</Heading3>
          <Carousel>
            {awardsList &&
              awardsList.map((award: AWARD) => (
                <AwardLink key={award._id} href={`/awards/${award._id}`}>
                  <AwardCard>
                    <Heading4>
                      {award.name ===
                      "46th Jawaharlal Nehru National Science Mathematics And Environment Exhibition"
                        ? "46th JNNSMEE"
                        : award.name}
                    </Heading4>
                  </AwardCard>
                </AwardLink>
              ))}
          </Carousel>
          <SecondaryButton href="/awards">See All Awards</SecondaryButton>
        </Awards>
        <Projects>
          <Heading3>My Projects</Heading3>
          <Carousel>
            {projectsList &&
              projectsList.map((project: PROJECT) => (
                <ProjectLink key={project._id} href={`projects/${project._id}`}>
                  <CardProject>
                    <ImageCard
                      src={`https://swapnadeep.com/${project.image}`}
                      alt={`screenshot of ${project.name} project`}
                      layout="fixed"
                      width="200px"
                      height="120px"
                    />
                    <Heading4>{project.name}</Heading4>
                  </CardProject>
                </ProjectLink>
              ))}
          </Carousel>
          <BlogButton href="/projects">See All Projects</BlogButton>
        </Projects>
        <Talks>
          <Heading3>My Talks</Heading3>
          <Carousel>
            {talksList.map((talk: TALK) => (
              <TalksCard key={talk._id}>
                <Heading4>{talk.name}</Heading4>
              </TalksCard>
            ))}
          </Carousel>
          <BlogButton
            href="https://dev.to/swapnadeepmohapatra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            See All Talks
          </BlogButton>
        </Talks>
        <Blogs>
          <Heading3>My Blogs</Heading3>
          <Carousel>
            {blogList.map((blog: BLOGS) => (
              <BlogLink
                key={blog._id}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardBlog>
                  <ImageCard
                    src={blog.pic}
                    alt={`Thumbnail of ${blog.name} blog`}
                    layout="fixed"
                    width="200px"
                    height="90px"
                  />
                  <Heading4>{blog.name}</Heading4>
                </CardBlog>
              </BlogLink>
            ))}
          </Carousel>
          <BlogButton
            href="https://dev.to/swapnadeepmohapatra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            See All Blogs
          </BlogButton>
        </Blogs>
        <Resume>
          <Heading3>My Resume</Heading3>
          <CTAButton
            href="https://swapnadeep.com/Swapnadeep_Mohapatra_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download My Resume
          </CTAButton>
        </Resume>
      </Main>
    </div>
  );
};

export default Home;

const Main = styled.div`
  padding: 1rem;
  @media (max-width: 600px) {
    padding: 0;
  }
`;

const Prargraph = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0rem;
`;

const Heading3 = styled.h3`
  font-size: 1.6rem;
  text-align: center;
  padding-top: 2rem;
`;

const Heading4 = styled.h4`
  font-size: 1rem;
  text-align: center;
`;

const Awards = styled.div`
  border-radius: 1rem;
  height: 25rem;
  background: ${({ theme }) => theme.gradient1};
  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

const Projects = styled.div`
  height: 450px;
  background: ${({ theme }) => theme.body};

  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

const Talks = styled.div`
  border-radius: 1rem;
  height: 22rem;
  background: ${({ theme }) => theme.gradient2};

  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

const ImageCard = styled(Image)`
  border-radius: 0.5rem;
`;

const Blogs = styled.div`
  height: 400px;
  background: ${({ theme }) => theme.body};

  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

const BlogLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  margin: 0.5rem;
`;

const AwardLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  margin: 0.5rem;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  margin: 0.5rem;
`;

const BlogButton = styled.a`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  text-decoration: none;
  margin: 0.5rem;
  background: ${({ theme }) => theme.gradient1};
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    margin: 0.5rem 0;
    text-align: center;
  }
`;

const CTAButton = styled.a`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  text-decoration: none;
  margin: 0.5rem;
  background: linear-gradient(to right, #746aff, #06acff);
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.body};
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    margin: 0.1rem 0;
    text-align: center;
    left: 50%;
    width: 70%;
  }
`;

const SecondaryButton = styled.a`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  text-decoration: none;
  margin: 0.5rem;
  background: #f0faff;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    margin: 0.5rem 0;
    text-align: center;
  }
`;

const Carousel = styled.div`
  display: flex;
  overflow-x: scroll;
  margin: 0rem 2rem;

  ::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 0.4rem;
  }

  ::-webkit-scrollbar-thumb {
    background: #999;
    border-radius: 0.4rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #888;
  }
`;

const Card = styled.div`
  min-width: 200px;
  padding: 2rem;
  background: ${({ theme }) => theme.body};
  margin: 1rem;
  border-radius: 0.5rem;
  :hover {
    transform: scale(1.05);
  }
  will-change: transform;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
  cursor: pointer;
`;

const AwardCard = styled.div`
  min-width: 200px;
  padding: 2rem;
  background: ${({ theme }) => theme.body};
  margin: 1rem;
  border-radius: 0.5rem;
  :hover {
    transform: scale(1.05);
  }
  will-change: transform;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
  cursor: pointer;
`;

const TalksCard = styled.div`
  min-width: 200px;
  padding: 2rem;
  background: ${({ theme }) => theme.body};
  margin: 1rem;
  border-radius: 0.5rem;
  :hover {
    transform: scale(1.05);
  }
  will-change: transform;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
  cursor: pointer;
  border: 0.1rem solid ${({ theme }) => theme.border};
`;

const CardBlog = styled.div`
  min-width: 200px;
  padding: 1rem;
  background: ${({ theme }) => theme.body};
  border-radius: 0.5rem;
  cursor: pointer;
  // border: 0.1rem solid ${({ theme }) => theme.border};
  div {
    border-radius: 0.5rem;
  }
  div {
    :hover {
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
      transform: scale(1.05);
    }
    will-change: transform;
    transition-property: box-shadow, transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.3s;
  }
`;

const CardProject = styled.div`
  min-width: 200px;
  padding: 1rem;
  background: ${({ theme }) => theme.body};
  border-radius: 0.5rem;
  cursor: pointer;
  // border: 0.1rem solid ${({ theme }) => theme.border};
  div {
    border-radius: 0.5rem;
  }
  div {
    :hover {
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
      transform: scale(1.05);
    }
    will-change: transform;
    transition-property: box-shadow, transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.3s;
  }
`;

const Resume = styled.div`
  border-radius: 1rem;
  height: 200px;
  padding-bottom: 2rem;
  margin: 3rem 0rem;
  background: #f0faff;

  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

const PersonalDetail = styled.div`
  padding: 0rem 1rem;
`;
