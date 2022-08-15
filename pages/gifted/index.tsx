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
        <title>
          Application for Admission under Gifted Children - Swapnadeep
        </title>
        <meta name="description" content="More About Swapnadeep Mohapatra" />
      </Head>
      <LessWidthDiv>
        <Content>
          <Heading1>
            Application for Admission under Gifted Children Supernumerary Quota
          </Heading1>
          <LinkA
            href="https://aicte-india.org/content/eligibility-criteria-students-seeking-admission-under-supernumerary-quota-gifted-children"
            target="_blank"
            rel="noopener noreferrer"
          >
            AICTE Circular - Eligibility Criteria for the Students Seeking
            Admission Under the Supernumerary Quota for Gifted Children{" "}
          </LinkA>
          <Heading2>Relevant Documents</Heading2>
          <List>
            <LinkNormal
              href="https://drive.google.com/file/d/1IPePiCl5OX6m7E9uBDb1yKetGhUeTTZL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GridItem>
                <strong>Eligibility Criteria Point 1</strong>
                Prizes Won in National/International Level Competitions
                Organized by Government or Prestigious Non-governmental
                Institutions
              </GridItem>
            </LinkNormal>
            <LinkNormal
              href="https://drive.google.com/file/d/1Z2t7uSEVpgTJI5SdM6HOKYCt30Tu9LTC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GridItem>
                <strong>Eligibility Criteria Point 7</strong>
                Candidate Must Have Conceived and Developed an Innovative
                Project/ Product Recognized and Reported by Prestigious National
                or Vernacular Media (Print/TV/Digital)
              </GridItem>
            </LinkNormal>
            <LinkNormal
              href="https://drive.google.com/file/d/1xfHp5MBXo5m2yoPaIjnVtX32VW9wLCNF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GridItem>
                <strong>Eligibility Criteria Point 8</strong>
                Candidate Is an Owner of Apps on Google/Apple/Windows Stores or
                Has Launched or Is in Process of Launching a Technology-Based
                Innovative Product in the Market (With More Than 10,000
                Downloads)
              </GridItem>
            </LinkNormal>
          </List>
          {/* <Heading2>Statement of Purpose</Heading2>
          <List>
            <LinkNormal
              href="https://drive.google.com/file/d/1k4-SHEHxNQ3vITsSW8IFDE5RCTSShVle/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GridItem>Statement of Purpose</GridItem>
            </LinkNormal>
          </List> */}
          <Heading2>Marksheet</Heading2>
          <List>
            <LinkNormal
              href="https://drive.google.com/file/d/1OcaojYualW7mB575TUFzpPNrL499m6L0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GridItem>Class 10 CBSE</GridItem>
            </LinkNormal>
            <LinkNormal
              href="https://drive.google.com/file/d/1TCevXI9OG1gBmLMvCbhpxqWXOOPOfBOo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GridItem>Class 12 CBSE</GridItem>
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
          {/* <Heading2>Proof of Indian Citizenship</Heading2>
          <List>
            <LinkNormal
              href="https://drive.google.com/file/d/1k4-SHEHxNQ3vITsSW8IFDE5RCTSShVle/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GridItem>Masked Aadhaar Card</GridItem>
            </LinkNormal>
            <LinkNormal
              href="https://drive.google.com/file/d/1k4-SHEHxNQ3vITsSW8IFDE5RCTSShVle/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GridItem>PAN Card</GridItem>
            </LinkNormal>
          </List> */}
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
