import { createGlobalStyle } from "styled-components";

type Theme = {
  body: string;
  text: string;
  linkText: string;
  border: string;
  borderBg: string;
  borderLight: string;
  accent: string;
  blurredBg: string;
  gradientMain: string;
  gradient1: string;
  gradient2: string;
  gradient2inverted: string;
  lightBg: string;
  shadowColor: string;
  maxWidth: string;
};

export const lightTheme: Theme = {
  body: "#ffffff",
  text: "#000000",
  linkText: "#1e1e1e",
  border: "#cccccc",
  borderBg: "#cccccc",
  borderLight: "#e6e9ec",
  accent: "#cdf0ea",
  blurredBg: "rgba(255, 255, 255, 0.93)",
  gradientMain: "linear-gradient(to right, #746AFF, #06ACFF)",
  gradient1: "linear-gradient(to right, #d9cbff, #c8e8fe)",
  gradient2: "linear-gradient(to bottom, #f0faff, #ffffff)",
  gradient2inverted: "linear-gradient(to top, #f0faff, #ffffff)",
  lightBg: "#f0faff",
  shadowColor: "rgba(0, 0, 0, 0.2)",
  maxWidth: "900px",
};

export const darkTheme: Theme = {
  body: "#111216",
  text: "#ffffff",
  linkText: "#c1c1c1",
  border: "#343434",
  borderBg: "#5d5d5d",
  borderLight: "#242424",
  accent: "#fbdeac",
  blurredBg: "rgba(15,10,35,0.9);",
  gradientMain: "linear-gradient(to right, #d9cbff, #c8e8fe)",
  gradient1: "linear-gradient(to right, #746AFF, #06ACFF)",
  gradient2: "linear-gradient(to bottom, #0A075A, #111216)",
  gradient2inverted: "linear-gradient(to top, #0A075A, #111216)",
  lightBg: "#0A075A",
  shadowColor: "rgba(0, 0, 0, 0.2)",
  maxWidth: "750px",
};

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
body {
  background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "DM Sans", sans-serif;
    transition: all 0.20s linear;
  }
`;
