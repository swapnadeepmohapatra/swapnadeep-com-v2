import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import SvgMoon from "../../images/SvgMoon";
import { SvgClose, SvgMenu, SvgSun } from "../../images";

interface NavbarProps {
  toggleTheme: () => void;
  theme: string;
  width: any;
}

export const Navbar = ({ toggleTheme, theme, width }: NavbarProps) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Header>
      <SkipContent href="#mainContent">Skip To Main Content</SkipContent>
      <Link href="/" passHref>
        <h1>Swapnadeep</h1>
      </Link>
      <Nav>
        {width > 600 ? (
          <Fragment>
            <Navitem>
              <Link href="/" passHref>
                home
              </Link>
            </Navitem>
            <Navitem>
              <Link href="/projects" passHref>
                projects
              </Link>
            </Navitem>
            <Navitem>
              <Link href="/awards" passHref>
                awards
              </Link>
            </Navitem>
            {/* <ThemeButton onClick={toggleTheme}>
              {theme === "light" ? (
                <SvgSun currentColor="#000" />
              ) : (
                <SvgMoon currentColor="#fff" />
              )}
            </ThemeButton> */}
          </Fragment>
        ) : (
          <Fragment>
            {/* <ThemeButton onClick={toggleTheme}>
              {theme === "light" ? (
                <SvgSun currentColor="#000" />
              ) : (
                <SvgMoon currentColor="#fff" />
              )}
            </ThemeButton> */}
            <MenuButton onClick={() => setOpenDialog(!openDialog)}>
              <SvgMenu currentColor={theme === "light" ? "#000" : "#fff"} />
            </MenuButton>
          </Fragment>
        )}
      </Nav>
      {openDialog && (
        <Dialog onClick={() => setOpenDialog(!openDialog)}>
          <ButtonClose onClick={() => setOpenDialog(!openDialog)}>
            <SvgClose />
          </ButtonClose>
          <Navitem>
            <Link href="/" passHref>
              home
            </Link>
          </Navitem>
          <Navitem>
            <Link href="/projects" passHref>
              projects
            </Link>
          </Navitem>
          <Navitem>
            <Link href="/awards" passHref>
              awards
            </Link>
          </Navitem>
        </Dialog>
      )}
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  height: calc(40px + 2rem);
  padding: 0 1rem;
  background-color: var(--text);
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.body};
  z-index: 1;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-text);
  text-decoration: none;
  padding: 0 1rem;
  gap: 10px;
`;

const Navitem = styled.p`
  font-size: 1.5rem;
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }
  padding: 0 0.4rem;
`;

const ThemeButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0rem 0.4rem;
  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

const MenuButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0rem 0.4rem;
  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

const ButtonClose = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0rem 0.4rem;
  svg {
    height: 1.8rem;
    width: 1.8rem;
  }
  color: ${({ theme }) => theme.text};
  position: absolute;
  top: 1.4rem;
  right: 1.6rem;
  z-index: 10;
`;

const Dialog = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.blurredBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SkipContent = styled.a`
  padding: 6px;
  position: absolute;
  top: -40px;
  left: 0px;
  color: white;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  border-bottom-right-radius: 8px;
  background: linear-gradient(to right, #746aff, #06acff);
  -webkit-transition: top 1s ease-out;
  transition: top 1s ease-out;
  z-index: 100;

  :focus {
    position: absolute;
    left: 0px;
    top: 0px;
    outline-color: transparent;
    -webkit-transition: top 0.1s ease-in;
    transition: top 0.1s ease-in;
  }
`;
