import styled from "styled-components";

export const LessWidthDiv = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.maxWidth}) {
    margin: 0;
  }
`;
