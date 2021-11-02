import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { Main } from "../components/Main";

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
