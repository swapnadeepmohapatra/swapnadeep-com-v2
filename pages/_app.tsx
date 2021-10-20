import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "../utils";
import { Navbar } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.lang = "en";
    if (typeof window !== "undefined") {
      const newTheme = localStorage.getItem("theme");
      setTheme(newTheme || "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
        <div style={{ maxWidth: "650px", margin: "0 auto" }}>
          <GlobalStyles />
          <Navbar toggleTheme={toggleTheme} theme={theme} />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </Fragment>
  );
}
export default MyApp;
