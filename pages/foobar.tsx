import React from "react";
import styled from "styled-components";
import { Main } from "../components/Main";

function Foobar() {
  return (
    <Main>
      <h1>Welcome to the mysterious page. Yayyy!!!</h1>
      <h3>We are still not done yet.</h3>
      <h6>
        Open My Terminal <SecretText>/terminal</SecretText>
      </h6>
    </Main>
  );
}

export default Foobar;

const SecretText = styled.span`
  color: #c1c1c1;
  font-weight: normal;
`;
