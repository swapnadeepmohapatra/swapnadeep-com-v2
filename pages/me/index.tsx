import React from "react";
import { Main } from "../../components/Main";
import { LessWidthDiv } from "../../components/LessWidthDiv";
import { GridItem } from "../../components/Grid";
import { Heading1 } from "../../components/Heading";
import styled from "styled-components";
import Head from "next/head";

function Application() {
  return (
    <Main>
      <Head>
        <title>Application - Swapnadeep</title>
        <meta
          name="description"
          content="Application of Swapnadeep Mohapatra"
        />
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
            Also, I have a passion for helping others learn. I am an active
            contributor in many programming communities. I helped organize many
            online events and workshops. I have also spoken in communities like
            DevKode, JavaScript Meetup (Bangalore). I spoke about using GraphQL
            as Frontend Developers. I also like to contribute to open-source
            projects. I have actively contributed to Hacktoberfest for the past
            3 years. I have also contributed to OSGeo as a part of Google
            Code-In 2020.
          </Pragraph>
          <Pragraph>
            I like to find out community problems and solve them. Every problem
            I see, I try to research around it and try to figure out the root
            cause for it. Then try to think out an idea to solve it. In most
            cases the solution contains an approach which uses technology to
            solve it. Here are some of the problems I tired to solve:
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
              An IoT solution for real-time monitoring of garbage bins with
              android and web apps for users. And other waste management
              solutions.
            </ListItem>
            <ListItem>
              <LinkA
                href="https://ekaksha.swapnadeep.com/"
                rel="noopener noreferrer"
                target={"_blank"}
              >
                e-Kaksha:
              </LinkA>{" "}
              A online platform to imitate the offline way of teaching in online
              mode by using a unified platform for doing everything related to
              education.
            </ListItem>
            <ListItem>
              <LinkA
                href="https://fieldscan.swapnadeep.com/"
                rel="noopener noreferrer"
                target={"_blank"}
              >
                Fieldscan:
              </LinkA>{" "}
              A simple, easy to use, and powerful tool for tracking travel
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
              Researching co-worker is something difficult. Tindev offers you
              the opportunity to simply accelerate the process by finding out
              which is the best match.
            </ListItem>
            <ListItem>
              <LinkA
                href="#"
                //    rel="noopener noreferrer" target={"_blank"}
              >
                SiteBlocker:
              </LinkA>{" "}
              A Chrome Extension to block distracting site during your
              productive hours.
            </ListItem>
          </UnorderList>
          <Pragraph>
            I have also taken part in hackathons and have participated in many
            competitions. I have won 5 National Level Science and Innovation
            competitions. And also have participated in TechFests conducted by
            various colleges. You can view all my achievements{" "}
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
            In the year 2020, I interned at a Startup building a SaaS product
            connecting startups and Angel investors. Initially, I was part of
            the data platform team where I was responsible for building the
            frontend of the internal tool that was used to view and compare all
            kinds of data. Then I was responsible for developing the Backend and
            Frontend for a Kanban-style list-making application. The frontend
            was built in React and Typescript, the backend was built using Node
            and Typescript and also used to default driver of MongoDB for
            database communication. I was also part of the team that developed
            the front-end of the SAAS product which helps startups to accelerate
            their growth.
            <br />
            It was really a get learning experience to work with some great and
            smart folks. Got to learn a lot working in a huge codebase and
            writing scalable code with all the best practices. The Tech Stack
            that I used were React, Redux, NodeJS, MongoDB, Sass. I also
            integrated a Chat Bot in the app.
          </Pragraph>
          <Pragraph>
            You can view my internship experience letter{" "}
            <LinkA
              href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b11ad192-ef09-45fe-8867-393ef066ff7f/Internship_Letter_for_Swapnadeep-converted-signed_%281%29.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211119T083006Z&X-Amz-Expires=86400&X-Amz-Signature=06827cfcad70545249e7bfba39e4447d7d84740f7d50cde6a3c6f9aaaac3495c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Internship%2520Letter%2520for%2520Swapnadeep-converted-signed%2520%281%29.pdf%22&x-id=GetObject"
              rel="noopener noreferrer"
              target={"_blank"}
            >
              here.
            </LinkA>
          </Pragraph>
          <Pragraph>
            As mentioned before I have spoken in one of the biggest tech
            communities in India. I talked about{" "}
            <Highlight>Getting Started with GraphQL</Highlight>. I discussed
            about what GraphQL is, what is Query, Mutation, and Subscription,
            then explained how it works with React and Apollo, also talked about
            testing GraphQL APIs. It was really a great experience speaking in
            front of 150+ folks. The talk was followed by a QnA session, where I
            got a chance to chat with some of the best minds in the industry and
            answer their queries.
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
            I have discussed a lot about my experience in the field of Software
            Development and my extra extra curricular achievements. Now comming
            to my curriculars, I have won many olympiads too. I am not a book
            worm but I love to read a lot of books. I have read many
            encyclopedias, tech related books, nobels, etc. My favorite subjects
            used to be Maths and Science, especially Physics. I got 94.4% in my
            10th boards, was among the Top 10% of the class.
          </Pragraph>
          <Pragraph>
            I keep a keen intrest in finance too. I track stocks and other
            assests and invest in them both actively and passively. During my
            free time I also take a look at the financials of the companies I am
            invested in, see their future growth plans. I also apply for a lot
            of IPOs and got allotment in some really great IPOs too. And do you
            know from where this hobby comes from? I got into this after I got
            the payment of the first freelance gig. Then I got stipend from my
            internship and then I got more into it.
            <br />I have done many courses about finance on Varsity. You can
            view the certificates here.
          </Pragraph>
          <Heading2>Some of the essays I wrote</Heading2>
          <List>
            <GridItem>
              What is the greatest challenge you have ever faced? Did you
              overcome it? If yes, how? If no, what did you learn from the
              experience?
            </GridItem>
            <GridItem>
              Describe one thing you would want to change about the world, and
              how technology can be used to bring about that change.
            </GridItem>
          </List>
          <Heading2>Recommendation Letters</Heading2>
          <List>
            <GridItem>Sandeep Devarapalli</GridItem>
          </List>
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
