import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AWARD } from "../../interfaces";
import { URL } from "../../utils";

interface AwardProps {
  slug: string;
}

export async function getServerSideProps(context: { query: AwardProps }) {
  return { props: { slug: context.query.slug } };
}

function Award({ slug }: AwardProps) {
  const [award, setAward] = useState<AWARD>({
    honorDate: "",
    honorDescription: "",
    honorIssuer: "",
    images: [""],
    important: true,
    name: "",
    _id: "",
  });

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${URL}/api/get-prize/${slug}`);
      const data = await res.json();
      console.log(data);

      setAward(data.prize);
    }
    fetchData();
  }, [slug]);

  const images = award?.images;

  const AwardPicture = styled.img`
    width: ${images ? 100 / images?.length - 1 : "100"}%;
    margin-bottom: 1rem;

    min-height: ${300 / images?.length}px;

    background-color: #f1f1f1;
    border-radius: 5px;
    transition-duration: 0.8s;

    /* Animation */
    -webkit-animation-duration: 1.6s;
    -moz-animation-duration: 1.6s;
    -o-animation-duration: 1.6s;
    animation-duration: 1.6s;
    -webkit-animation-name: pulseAnimation;
    -moz-animation-name: pulseAnimation;
    -o-animation-name: pulseAnimation;
    animation-name: pulseAnimation;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
    -o-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;

    @keyframes pulseAnimation {
      0% {
        background-color: #f1f1f1;
      }

      25% {
        background-color: #9c9c9c;
      }

      50% {
        background-color: #c1c1c1;
      }

      70% {
        background-color: #d8d8d8;
      }
    }
  `;

  return (
    <Main>
      <Heading1>{award.name}</Heading1>
      <Heading2>
        {award.honorIssuer} | {award.honorDate}
      </Heading2>
      <AwardPictures>
        {images?.map((image: string, index: number) => (
          <AwardPicture key={index} src={image} />
        ))}
      </AwardPictures>
      <AwardDesc>{award.honorDescription}</AwardDesc>
    </Main>
  );
}

export default Award;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  padding-bottom: 1rem;
`;

const Heading1 = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  margin-top: 1rem;
`;

const Heading2 = styled.h2`
  font-size: 1.2rem;
  font-weight: normal;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const AwardPictures = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0rem;
`;

const AwardDesc = styled.p`
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 1rem;
`;
