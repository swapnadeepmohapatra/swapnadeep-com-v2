import React from "react";
import Link from "next/link";

const slides = [
  {
    slug: "graphql",
    link: "https://docs.google.com/presentation/d/1wsDEp78fnLnQRj1AM-Blxw4PIWA4ebgDtwHrObFvV0M/edit#slide=id.geee995da10_0_4",
    name: "Getting Started with GraphQL for Frontend Devs",
  },
];

function Slides() {
  return (
    <div style={{ minHeight: "70vh" }}>
      <h1>Slides</h1>
      <div>
        <ol>
          {slides.map((slide) => (
            <li key={slide.slug}>
              <Link href={`slides/${slide.slug}`} passHref>
                <h2>{slide.name}</h2>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Slides;
