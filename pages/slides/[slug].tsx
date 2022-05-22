import React, { useEffect, useState } from "react";
import { URL } from "../../utils";
import { SLIDE } from "../../interfaces/slides";
import { Main } from "../../components/Main";
import styled from "styled-components";

interface SlidesProps {
  slug: string;
  data?: SLIDE;
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps(context: { params: SlidesProps }) {
  console.log(context);
  const slug = context.params.slug;

  const res = await fetch(`${URL}/api/get-slide/${slug}`);
  const data = await res.json();

  return { props: { slug: context.params.slug, data: data.slide } };
}

function SlideItem(props: SlidesProps) {
  const { slug, data } = props;

  useEffect(() => {
    typeof window !== "undefined" && window.location.replace(data?.link || "");
  }, [slug, data]);

  return (
    <Main>
      <LessWidthDiv>
        <h1>{!data ? "Loading..." : data.name || "Error: Slides Not Found"}</h1>
        <h1>{!data ? "" : "Redirecting..." || ""}</h1>
      </LessWidthDiv>
    </Main>
  );
}

export default SlideItem;

const LessWidthDiv = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;
