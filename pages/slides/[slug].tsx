import React, { useEffect, useState } from "react";
import Head from "next/head";
import { URL } from "../../utils";

export async function getServerSideProps(context) {
  return { props: { slug: context.query.slug } };
}

function SlideItem(props) {
  const { slug } = props;
  const [data, setData] = useState();

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
    <div style={{ minHeight: "70vh" }}>
      <h1>{(data && data.name) || "Error: Slides Not Found"}</h1>
    </div>
  );
}

export default SlideItem;
