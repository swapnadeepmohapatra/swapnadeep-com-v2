import "../styles/globals.css";
import { Fragment, useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "../utils";
import { Footer, Navbar } from "../components";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");
  const [width, setWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  );

  function handleResize() {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = "en";
    if (typeof window !== "undefined") {
      const newTheme = localStorage.getItem("theme");
      setTheme(newTheme || "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };

  if (
    typeof window !== "undefined" &&
    window.location.pathname === "/terminal"
  ) {
    return (
      <Fragment>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
        </Head>
        {/* <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}> */}
        {/* FIXME: Temp fix for default light theme */}
        <ThemeProvider theme={lightTheme}>
          <div
            style={{
              width: "100vw",
              height: "100vh",
              margin: 0,
              backgroundColor: "#000",
            }}
          >
            <GlobalStyles />
            <div id="mainContent">
              <Component {...pageProps} />
            </div>
          </div>
        </ThemeProvider>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6FTDS8QC8M"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6FTDS8QC8M');  
          `}
        </Script>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
        </Head>
        {/* <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}> */}
        {/* FIXME: Temp fix for default light theme */}
        {/* <ThemeProvider theme={darkTheme}> */}
        <ThemeProvider theme={lightTheme}>
          <div
          // style={{
          //   maxWidth: " ${({ theme }) => theme.maxWidth}",
          //   margin: "0 auto",
          // }}
          >
            <GlobalStyles />
            <Navbar
              toggleTheme={toggleTheme}
              theme={theme}
              width={width || 0}
            />
            <div id="mainContent">
              <Component {...pageProps} />
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </Fragment>
    );
  }
}
export default MyApp;
