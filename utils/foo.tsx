import React from "react";
import styled from "styled-components";

function Foo() {
  return (
    <div>
      <Text>So your boss got to know what you have done so far?</Text>
      <Text>Your Parents are so much proud of you.</Text>
    </div>
  );
}

function Bar() {
  return (
    <CenterDiv>
      <Button href="/foobar">X</Button>
    </CenterDiv>
  );
}

export { Foo, Bar };

const Text = styled.p`
  color: white;
  font-size: 0.1rem;
  user-select: none;
`;

const Button = styled.a`
  color: white;
`;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
