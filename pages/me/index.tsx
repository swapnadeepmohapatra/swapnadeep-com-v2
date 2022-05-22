import React from "react";
import { Main } from "../../components/Main";
import { LessWidthDiv } from "../../components/LessWidthDiv";
import { GridItem } from "../../components/Grid";
import { Heading1, Heading3 } from "../../components/Heading";
import styled from "styled-components";
import Head from "next/head";

function Application() {
  return (
    <Main>
      <Head>
        <title>About - Swapnadeep</title>
        <meta name="description" content="More About Swapnadeep Mohapatra" />
      </Head>
      <LessWidthDiv>
        <Content>
          <Heading1>Thank you for coming here.</Heading1>
          <Heading2>A bit about me</Heading2>
          <Pragraph>
            I am Swapnadeep Mohapatra. Currently I am studying in class 12th at
            D.A.V. Public School, Chandrasekharpur, Bhubaneswar. Apart from that
            I really love to write code and build awesome stuff.
          </Pragraph>
          <Pragraph>
            I am keen to learn new technologies and I always try to demystify
            tech jargons I come across. So I have curated a newsletter called{" "}
            <LinkA
              href="https://swapnadeep.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"explain like I'm ten"}
            </LinkA>{" "}
            which explains the most complex computer science concept in the
            easiest way.
          </Pragraph>
          <Pragraph>
            I owe my continuous learning to the internet’s vast open platform
            and like to give back to the tech community. I am an active
            contributor in many programming communities. I helped organize many
            online events and workshops. I have also spoken in communities like
            DevKode, JavaScript Meetup (Bangalore). I spoke about using GraphQL
            as Frontend Developers. I actively participate in various
            open-source projects, hacktoberfests, etc. to get a hands-on
            experience on programming skills. I have also contributed to OSGeo
            as a part of Google Code-In 2020.
          </Pragraph>
          <Pragraph>
            I like to find out community problems and solve them. Whenever I
            have encountered any problems, I take a logical approach to
            understand and identify the root cause, and come up with the
            solution. In most cases, the solution contains a technology-driven
            approach to solve it. Here are some of the problems I tired to solve
            in the recent past:
          </Pragraph>
          <UnorderList>
            <ListItem>
              <LinkA
                href="https://swachhbin.swapnadeep.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SwachhBin:
              </LinkA>{" "}
              An IoT based waste management solution for real-time monitoring of
              garbage bins with android and web apps for users.
            </ListItem>
            <ListItem>
              <LinkA
                href="https://ekaksha.swapnadeep.com/"
                rel="noopener noreferrer"
                target={"_blank"}
              >
                e-Kaksha:
              </LinkA>{" "}
              A unified platform that seamlessly brings the offline way of
              teaching to online mode.
            </ListItem>
            <ListItem>
              <LinkA
                href="https://fieldscan.swapnadeep.com/"
                rel="noopener noreferrer"
                target={"_blank"}
              >
                Fieldscan:
              </LinkA>{" "}
              A simple, easy to use, and powerful tool for tracking the travel
              history of people during the hard times of pandemic.
            </ListItem>
            <ListItem>
              <LinkA
                href="http://tindev.swapnadeep.com/"
                rel="noopener noreferrer"
                target={"_blank"}
              >
                Tindev:
              </LinkA>{" "}
              An interactive platform that connects techies all over the world,
              and gives an opportunity to learn, share your experiences, pick
              co-workers for your projects.
            </ListItem>
            <ListItem>
              <LinkA
                href="#"
                //    rel="noopener noreferrer" target={"_blank"}
              >
                SiteBlocker:
              </LinkA>{" "}
              A Chrome extension to block distracting sites during your
              productive hours.
            </ListItem>
          </UnorderList>
          <Pragraph>
            In the past 4 years, I got an opportunity to showcase my e-SwachhBin
            solution in various science and innovation competitions all over
            India, and have won 5 National Level awards for the same. I have
            also participated and won many other TechFests conducted by various
            colleges. You can view all my achievements{" "}
            <LinkA
              href="https://swapnadeep.com/awards"
              rel="noopener noreferrer"
              target={"_blank"}
            >
              here
            </LinkA>
            .
          </Pragraph>
          <Pragraph>
            In the year 2020, I interned at a Startup, to build a SaaS product
            connecting startups and Angel investors. Initially, I was part of
            the data platform team where I was responsible for building the
            frontend of the internal tool that was used to view and compare all
            kinds of data. Then I was responsible for developing the Backend and
            Frontend for a Kanban-style list-making application. The frontend
            was built in React and Typescript, the backend was built using Node
            and Typescript and also used to default driver of MongoDB for
            database communication. I was also part of the team that developed
            the front-end of the SAAS product which helps startups to accelerate
            their growth. Those 7 months was a great learning experience to work
            with some smart folks in the startup world. I got to learn a lot
            working in a huge codebase and writing scalable code with all the
            best practices. The Tech Stack that I used were React, Redux,
            NodeJS, MongoDB, SaaS. I also integrated a Chat Bot in the app.
          </Pragraph>
          <Pragraph>
            You can view my internship experience letter{" "}
            <LinkA
              href="https://drive.google.com/file/d/12lNGiUSZBojJlMQnVBA5cgJDxVThRmfT/view?usp=sharing"
              rel="noopener noreferrer"
              target={"_blank"}
            >
              here.
            </LinkA>
          </Pragraph>
          <Pragraph>
            As mentioned before, I have spoken in one of the biggest tech
            communities in India. I talked about Getting Started with GraphQL,
            which covered various topics such as what is GraphQL, what is Query,
            Mutation, and Subscription, how it works with React and Apollo,
            testing GraphQL APIs. Speaking in front of 150+ folks from the tech
            community was a learning experience that helped my boost my
            confidence in public speaking. The talk was followed by a QnA
            session, where I got a chance to chat with some of the best minds in
            the industry and answer their queries. As mentioned before I have
            spoken in one of the biggest tech communities in India. I talked
            about <Highlight>Getting Started with GraphQL</Highlight>. I
            discussed about what GraphQL is, what is Query, Mutation, and
            Subscription, then explained how it works with React and Apollo,
            also talked about testing GraphQL APIs. It was really a great
            experience speaking in front of 150+ folks. The talk was followed by
            a QnA session, where I got a chance to chat with some of the best
            minds in the industry and answer their queries.
            <br />
            You can view the slides and the recording of the talk{" "}
            <LinkA
              href="https://swapnadeep.com/talks/617693275b065d81b9f7eeb2"
              rel="noopener noreferrer"
              target={"_blank"}
            >
              here
            </LinkA>
            .
          </Pragraph>
          <Pragraph>
            Coming to my academics, I believe i have done fairly well, if not
            the best. I am not a book worm but I love to read tech related
            books, and many others in the non-fiction genre. I ensure that my
            interests and hobbies do not affect my academics, and I managed to
            bag 94.4% in my 10th board which was among the top 10% of the entire
            batch. I have won many Olympiads too.
          </Pragraph>
          <Pragraph>
            I also keep a keen interest in various finance topics. I actively
            track stocks and other assets, and invest in them from time to time.
            I took up some finance courses through Varsity that helped me
            understand the market better and make the right investment
            decisions. You can view the certificates{" "}
            <LinkA
              href="http://swapnadeep.com/finance"
              rel="noopener noreferrer"
              target={"_blank"}
            >
              here
            </LinkA>
            . This interest in finance came during my 7-month internship at the
            startup, when i received my first stipend. Instead of spending this
            money unnecessarily, i decided to invest it that could help me in my
            future goals. During my free time, I also take a look at the
            financials of the companies I am invested in, to understand their
            future growth plans and vision, broadly in the areas of
            sustainability and innovations.
          </Pragraph>
          <Pragraph>
            Learning is a never-ending experience, and there’s so much more to
            know and share with the world. Do visit my page later to know about
            my new endeavors. I hope this motivates you to experiment, innovate
            and do more with your life. Never stop learning. See you around.
          </Pragraph>
          <Heading2>Some of the essays I wrote</Heading2>
          <List>
            <LinkNormal
              href="https://swapnadeep.notion.site/Describe-a-topic-idea-or-concept-you-find-so-engaging-that-it-makes-you-lose-all-track-of-time-Wh-6f38e9c468194abb8aaac7905f0a4fcc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GridItem>
                Describe a topic, idea, or concept you find so engaging that it
                makes you lose all track of time. Why does it captivate you?
                What or who do you turn to when you want to learn more?
              </GridItem>
            </LinkNormal>
            <LinkNormal
              href="https://swapnadeep.notion.site/Think-of-something-you-are-really-passionate-about-This-could-be-anything-a-hobby-a-particular-c-3e7cd3af29bf48a492a417b84eabdeb9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GridItem>
                Think of something you are really passionate about. This could
                be anything - a hobby, a particular concept, or even a startup
                idea. How do you learn more about it? What keeps you motivated
                to pursue it?
              </GridItem>
            </LinkNormal>
            <LinkNormal
              href="https://swapnadeep.notion.site/Our-vision-is-to-nurture-the-next-generation-of-fearless-leaders-who-will-solve-the-toughest-challen-869dfa92372b4e98adfdef9f6df03fef"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GridItem>
                Our vision is to nurture the next generation of fearless leaders
                who will solve the toughest challenges of our planet using
                technology. Tell us how have you developed your interest in a
                tech career. Describe 2-3 personal experiences that have shaped
                this interest.
              </GridItem>
            </LinkNormal>
          </List>
          <Heading2>Recommendation Letters</Heading2>
          <List>
            <LinkNormal
              href="https://drive.google.com/file/d/1k4-SHEHxNQ3vITsSW8IFDE5RCTSShVle/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GridItem>
                Sandeep Devarapalli - Previous Employee (CEO Hackstrap)
              </GridItem>
            </LinkNormal>
          </List>
          <Heading2>My Resume</Heading2>
          <CTAButton
            href="https://swapnadeep.com/Swapnadeep_Mohapatra_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download My Resume
          </CTAButton>
          {/* <Heading2>What people have to say about me?</Heading2> */}
          {/* <IFRAMEContainer>
            <div style={{ display: "grid", placeItems: "center" }}>
              <IFRAME
                height="500"
                // width="500"
                // height="549"
                src="https://www.youtube.com/embed/qeSs5zDMOG0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></IFRAME>
              <Pragraph>
                <Highlight>Varun Mayya: </Highlight>Founder & CEO of Avalon Labs
              </Pragraph>
            </div>
            <div style={{ display: "grid", placeItems: "center" }}>
              <IFRAME
                height="500"
                // width="500"
                // height="549"
                src="https://www.youtube.com/embed/6h5Uyyd54rk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></IFRAME>
              <Pragraph>
                <Highlight> Tanay Pratap: </Highlight>Founder & CTO Invact,
                xMicrosoft
              </Pragraph>
            </div>
          </IFRAMEContainer> */}
        </Content>
      </LessWidthDiv>
    </Main>
  );
}

export default Application;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Heading2 = styled.h2`
  font-size: 1.5rem;
`;

const Pragraph = styled.p`
  margin: 0.5rem 0;
  padding: 0;
  text-align: justify;
`;

const LinkA = styled.a`
  color: #08abff;
`;

const LinkNormal = styled.a`
  color: #000;
  text-decoration: none;
`;

const UnorderList = styled.ul`
  margin: 0 1rem;
  padding: 0 1rem;
`;

const List = styled.ul`
  display: grid;
  margin: 0 1rem;
  padding: 0 1rem;
  list-style-type: none;
  gap: 10px;
`;

const ListItem = styled.li`
  margin: 0.5rem 0;
  padding: 0;
`;

const Highlight = styled.strong``;

export const CTAButton = styled.a`
  margin: 0 2rem;
  text-decoration: none;
  background: ${({ theme }) => theme.gradientMain};
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.body};
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 0.2rem 0.5rem ${({ theme }) => theme.shadowColor};
  }

  @media (max-width: 600px) {
    margin: 0 2rem;
    text-align: center;
    width: calc(100%-5rem);
  }
`;

const IFRAME = styled.iframe`
  // position: relative;
  // overflow: hidden;
  // width: 100%;
  // // padding-top: 56.25%;
  // padding-top: 56.25%;
`;

const IFRAMEContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  place-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  // position: absolute;
  // top: 0;
  // left: 0;
  // bottom: 0;
  // right: 0;
  // width: 100%;
  // height: 100%;
`;
