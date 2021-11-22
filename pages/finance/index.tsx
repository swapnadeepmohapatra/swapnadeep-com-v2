import React from "react";
import Head from "next/head";
import { LessWidthDiv } from "../../components/LessWidthDiv";
import { Main } from "../../components/Main";
import { Heading1 } from "../../components/Heading";
import { Description, Grid, GridItem, Name } from "../../components/Grid";
import styled from "styled-components";

function Finance() {
  return (
    <Main>
      <Head>
        <title>Finance - Swapnadeep</title>
        <meta
          name="description"
          content="Finance Portfolio of Swapnadeep Mohapatra"
        />
      </Head>
      <LessWidthDiv>
        <Heading1>Finance Certificates</Heading1>
        <List>
          <LinkNormal
            href="https://drive.google.com/file/d/1ke7Xqxpf3zazKAWmQ09FDZV8-cQGacTk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GridItem>
              <Name>Stock Market Basics</Name>
              <Description>Varsity (212.5/250)</Description>
            </GridItem>
          </LinkNormal>
          <LinkNormal
            href="https://drive.google.com/file/d/1ywNfDLOfwQBEErFYuljkEQHhmwLy9Nqv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GridItem>
              <Name>Technical Analysis</Name>
              <Description>Varsity (250/250)</Description>
            </GridItem>
          </LinkNormal>
        </List>
      </LessWidthDiv>
    </Main>
  );
}

export default Finance;

const List = styled.ul`
  display: grid;
  margin: 1rem;
  padding: 0 1rem;
  list-style-type: none;
  gap: 10px;
  @media (min-width: ${({ theme }) => theme.maxWidth}) {
    width: 700px;
  }
`;

const LinkNormal = styled.a`
  color: #000;
  text-decoration: none;
`;
