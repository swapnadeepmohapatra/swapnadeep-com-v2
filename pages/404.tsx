import React from "react";
import Head from "next/head";
import { Main } from "../components/Main";
import styled from "styled-components";

function Custom404({}) {
  return (
    <Main>
      <Head>
        <title>Error - Swapnadeep</title>
        <meta name="description" content="Page not found" />
      </Head>
      <Heading>404 | Page Not Found</Heading>
    </Main>
  );
}

export default Custom404;

const Heading = styled.h1`
  margin: auto;
`;
