import React, { useEffect, useState } from "react";
import Head from "next/head";
import { URL } from "../../utils";
import { SLIDE } from "../../interfaces/slides";
import styled from "styled-components";

interface SlidesProps {
  slug: string;
}

export async function getServerSideProps(context: { query: SlidesProps }) {
  return { props: { slug: context.query.slug } };
}

function SlideItem(props: SlidesProps) {
  const { slug } = props;
  const [data, setData] = useState<SLIDE>();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${URL}/api/get-slide/${slug}`);
      const data = await res.json();
      setData(data?.slide);
      typeof window !== "undefined" &&
        window.location.replace(data?.slide?.link);
    }
    fetchData();
  }, [slug]);

  return (
    <Main>
      <h1>{(data && data.name) || "Error: Slides Not Found"}</h1>
    </Main>
  );
}

export default SlideItem;

const Main = styled.main`
  min-height: 70vh;
`;
