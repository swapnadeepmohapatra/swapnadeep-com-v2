import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import styled from "styled-components";

const Custom404: NextPage = () => {
  return (
    <Main>
      <Head>
        <title>Error - Swapnadeep</title>
        <meta name="description" content="Page not found" />
      </Head>
      <h1>404 | Page Not Found</h1>
    </Main>
  );
};

export default Custom404;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;
