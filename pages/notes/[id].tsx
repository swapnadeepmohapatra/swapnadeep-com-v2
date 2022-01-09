import React from "react";
import Head from "next/head";
import { Heading1 } from "../../components/Heading";
import { LessWidthDiv } from "../../components/LessWidthDiv";
import { Main } from "../../components/Main";

function NoteItem() {
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
      </LessWidthDiv>
    </Main>
  );
}

export default NoteItem;
