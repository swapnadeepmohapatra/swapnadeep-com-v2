import React from "react";
import styled from "styled-components";

export async function getServerSideProps(context: any) {
  const res = await fetch(
    `https://v2.swapnadeep.com/api/get-prize/${context.query.slug}`
  );
  const data = await res.json();

  return { props: { prize: data.prize } };
}

function Award({ prize }: { prize: any }) {
  const award = prize;

  const images = award?.images;

  const AwardPicture = styled.img`
    width: ${images ? 100 / images?.length - 1 : "100"}%;
    margin-bottom: 1rem;
  `;

  return (
    <div>
      <Heading1>{award.name}</Heading1>
      <Heading2>
        {award.honorIssuer} | {award.honorDate}
      </Heading2>
      <AwardPictures>
        {images?.map((image, index) => (
          <AwardPicture key={index} src={image} />
        ))}
      </AwardPictures>
      <AwardDesc>{award.honorDescription}</AwardDesc>
    </div>
  );
}

export default Award;

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
