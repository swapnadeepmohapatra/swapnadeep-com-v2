import styled from "styled-components";

export const Carousel = styled.div`
  display: flex;
  overflow-x: scroll;
  margin: 0rem 2rem;

  ::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 0.4rem;
  }

  ::-webkit-scrollbar-thumb {
    background: #999;
    border-radius: 0.4rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #888;
  }
`;
