import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

export async function getServerSideProps() {
  const res = await fetch(`https://v2.swapnadeep.com/api/all-prizes`);
  // const res = await fetch(`http://localhost:3000/api/all-prizes`);
  const data = await res.json();

  return {
    props: { data },
  };
}

const Awards: NextPage = ({ data }: any) => {
  return (
    <Main>
      <Heading1>All My Awards</Heading1>
      <AwardGrid>
        {data?.prizes?.map((award: any) => (
          <Link
            key={award._id}
            href={`awards/${award._id}`}
            passHref
            replace={false}
          >
            <Award>
              <AwardName>{award.name}</AwardName>
              <AwardDesc>{award.honorIssuer}</AwardDesc>
            </Award>
          </Link>
        ))}
      </AwardGrid>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 1rem;
`;

const Heading1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const AwardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  justify-content: center;
  align-items: stretch;
  margin: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Award = styled.div`
  background: #f0faff;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #ccc;
  // border: 1px solid rgb(0, 174, 255);
  border-radius: 5px;
  will-change: transform;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter,
    -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 5px #ccc;
    // box-shadow: 0px 0px 5px rgb(0, 174, 255);
  }
`;

const AwardName = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const AwardDesc = styled.p`
  margin: 0;
  padding: 0;
  text-align: left;
  margin-top: 1rem;
`;

export default Awards;
