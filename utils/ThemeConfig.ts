import { createGlobalStyle } from "styled-components";

type Theme = {
  body: string;
  text: string;
  linkText: string;
  border: string;
  borderBg: string;
  accent: string;
  blurredBg: string;
  gradient1: string;
  gradient2: string;
};

export const lightTheme: Theme = {
  body: "#ffffff",
  text: "#000000",
  linkText: "#1e1e1e",
  border: "#e6e9ec",
  borderBg: "#9b9b9b",
  accent: "#cdf0ea",
  blurredBg: "rgba(255, 255, 255, 0.93)",
  gradient1: "linear-gradient(to right, #d9cbff, #c8e8fe)",
  gradient2: "linear-gradient(to bottom, #f0faff, #ffffff)",
};

export const darkTheme: Theme = {
  body: "#111216",
  text: "#ffffff",
  linkText: "#c1c1c1",
  border: "#343434",
  borderBg: "#5d5d5d",
  accent: "#fbdeac",
  blurredBg: "rgba(15,10,35,0.9);",
  gradient1: "linear-gradient(to right, #746AFF, #06ACFF)",
  gradient2: "linear-gradient(to bottom, #0A075A, #111216)",
};

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "DM Sans", sans-serif;
    transition: all 0.20s linear;
  }
`;
