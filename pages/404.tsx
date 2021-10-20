import { NextPage } from "next";
import React from "react";
import styled from "styled-components";

const Custom404: NextPage = () => {
  return (
    <Main>
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
