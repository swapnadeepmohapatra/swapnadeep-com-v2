import React from "react";
import Head from "next/head";
import Link from "next/link";
import { LessWidthDiv } from "../../components/LessWidthDiv";
import { Main } from "../../components/Main";
import { Heading1 } from "../../components/Heading";
import { GridItem, Name } from "../../components/Grid";
import styled from "styled-components";

function Notes() {
  return (
    <Main>
      <Head>
        <title>Notes - Swapnadeep</title>
        <meta
          name="description"
          content="Notes Portfolio of Swapnadeep Mohapatra"
        />
      </Head>
      <LessWidthDiv>
        <Heading1>Notes</Heading1>
        <List>
          <LinkNormal
            href="https://swapnadeep.notion.site/Ankur-Warikoo-Notes-7a1568313cc84b0fad20ff4168263e58"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GridItem>
              <Name>The Complete Guide To Starting Up</Name>
              <Description>by - Ankur Warikoo</Description>
            </GridItem>
          </LinkNormal>
          <LinkNormal
            href="https://js.swapnadeep.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GridItem>
              <Name>JavaScript/ Web Development</Name>
            </GridItem>
          </LinkNormal>
          <LinkNormal
            href="https://dsalgo.swapnadeep.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GridItem>
              <Name>Data Structures and Algorithm</Name>
            </GridItem>
          </LinkNormal>
        </List>
      </LessWidthDiv>
    </Main>
  );
}

export default Notes;

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

// const LinkNormal = styled(Link)`
const LinkNormal = styled.a`
  color: #000;
  text-decoration: none;
`;

const Description = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  margin-top: 1rem;
`;
