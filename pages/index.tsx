import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { AWARD, BLOGS, PROJECT, TALK, WORK } from "../interfaces";
import { Carousel, ImageCard, CardLink } from "../components/HomePage";
import { Heading3, Heading4 } from "../components/Heading";
import { URL } from "../utils";

export async function getStaticProps() {
  const prizesResponse = await fetch(`${URL}/api/important-prizes`);
  const prizesData = await prizesResponse.json();

  const projectsResponse = await fetch(`${URL}/api/important-projects`);
  const projectsData = await projectsResponse.json();

  const blogsResponse = await fetch(`${URL}/api/important-blogs`);
  const blogsData = await blogsResponse.json();

  const talksResponse = await fetch(`${URL}/api/important-talks`);
  const talksData = await talksResponse.json();

  const worksResponse = await fetch(`${URL}/api/all-works`);
  const worksData = await worksResponse.json();

  return {
    props: {
      staticData: {
        prizes: prizesData.prizes,
        projects: projectsData.projects,
        blogs: blogsData.blogs,
        talks: talksData.talks,
        works: worksData.works,
      },
    },
  };
}

const Home: NextPage<{
  staticData: {
    prizes: AWARD[];
    projects: PROJECT[];
    blogs: BLOGS[];
    talks: TALK[];
    works: WORK[];
  };
}> = ({
  staticData,
}: {
  staticData: {
    prizes: AWARD[];
    projects: PROJECT[];
    blogs: BLOGS[];
    talks: TALK[];
    works: WORK[];
  };
}) => {
  const [awardsList, setAwardsList] = useState<AWARD[]>(staticData.prizes);
  const [projectsList, setProjectsList] = useState<PROJECT[]>(
    staticData.projects
  );
  const [talksList, setTalksList] = useState<TALK[]>(staticData.talks);
  const [blogList, setBlogList] = useState<BLOGS[]>(staticData.blogs);
  const [workList, setWorkList] = useState(staticData.works);

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

      const worksResponse = await fetch(`${URL}/api/all-works`);
      const worksData = await worksResponse.json();
      setWorkList(worksData.works);
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
                <CardLink key={award._id} href={`/awards/${award._id}`}>
                  <AwardCard>
                    <Heading4>
                      {award.name ===
                      "46th Jawaharlal Nehru National Science Mathematics And Environment Exhibition"
                        ? "46th JNNSMEE"
                        : award.name}
                    </Heading4>
                  </AwardCard>
                </CardLink>
              ))}
          </Carousel>
          <SecondaryButton href="/awards">See All Awards</SecondaryButton>
        </Awards>
        <Projects>
          <Heading3>My Projects</Heading3>
          <Carousel>
            {projectsList &&
              projectsList.map((project: PROJECT) => (
                <CardLink key={project._id} href={`projects/${project._id}`}>
                  <CardProject>
                    <ImageCard
                      src={project.thumbnail || project.image}
                      alt={`screenshot of ${project.name} project`}
                      layout="fixed"
                      width="200px"
                      height="120px"
                    />
                    <Heading4>{project.name}</Heading4>
                  </CardProject>
                </CardLink>
              ))}
          </Carousel>
          <BlogButton href="/projects">See All Projects</BlogButton>
        </Projects>
        <Talks>
          <Heading3>My Talks</Heading3>
          <Carousel>
            {talksList.map((talk: TALK) => (
              <CardLink key={talk._id} href={`talks/${talk._id}`}>
                <TalksCard>
                  <Heading4>{talk.name}</Heading4>
                </TalksCard>
              </CardLink>
            ))}
          </Carousel>
          <BlogButton href="/talks">See All Talks</BlogButton>
        </Talks>
        <Work>
          <Heading3>Work Experience</Heading3>
          <Carousel>
            {workList.map((exp: any) => (
              <CardLink key={exp._id} href={`/work`}>
                <WorkCard>
                  <Heading4>{exp.title}</Heading4>
                </WorkCard>
              </CardLink>
            ))}
          </Carousel>
          <BlogButton href="/work">See All Experiences</BlogButton>
        </Work>
        <Blogs>
          <Heading3>My Blogs</Heading3>
          <Carousel>
            {blogList.map((blog: BLOGS) => (
              <CardLink
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
              </CardLink>
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

const Main = styled.div``;

const Prargraph = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0rem;
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
    height: 25rem;
  }
`;

const Work = styled.div`
  border-radius: 1rem;
  height: 25rem;
  background: linear-gradient(to top, #f0faff, #ffffff);

  @media (max-width: 600px) {
    border-radius: 0;
    height: 28rem;
  }
`;

const Blogs = styled.div`
  height: 400px;
  background: ${({ theme }) => theme.body};

  @media (max-width: 600px) {
    border-radius: 0;
  }
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

const WorkCard = styled.div`
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
