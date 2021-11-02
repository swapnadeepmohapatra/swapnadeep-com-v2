import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  justify-content: center;
  align-items: stretch;
  margin: 1rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  background: #f0faff;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #ccc;
  // border: 1px solid rgb(0, 174, 255);
  border-radius: 5px;
  will-change: transform;
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 5px #ccc;
    // box-shadow: 0px 0px 5px rgb(0, 174, 255);
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Name = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const Description = styled.p`
  margin: 0;
  padding: 0;
  text-align: left;
  margin-top: 1rem;
`;

export { Grid, GridItem, Link, Description, Name };
