import React from "react";
import { Main } from "../components/Main";
import Head from "next/head";

function Application() {
  return (
    <Main>
      <Head>
        <title>Resume - Swapnadeep</title>
        <meta name="description" content="Resume of Swapnadeep Mohapatra" />
        <meta
          httpEquiv="Refresh"
          content="0; url='https://swapnadeep.com/Swapnadeep_Mohapatra_Resume.pdf'"
        />
      </Head>
      <div>
        <a href="https://swapnadeep.com/Swapnadeep_Mohapatra_Resume.pdf">
          Click Here For Resume
        </a>
      </div>
    </Main>
  );
}

export default Application;
