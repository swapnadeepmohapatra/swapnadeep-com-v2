import React from "react";
import styled from "styled-components";
import {URL} from "../utils";
import MyTerminal from "terminal-in-react";

function Terminal() {
  return (
    <Main>
      <MyTerminal
        color='#0DA9FF'
        backgroundColor='black'
        barColor='black'
        style={{ fontWeight: "bold", fontSize: "1em" }}
        commands={{
          'open-google': () => {window.open('https://www.google.com/', '_blank'); return "opened"},
          home: () => typeof window !== "undefined" && window.location.replace('/'),
          work: () => typeof window !== "undefined" && window.location.replace('/work'),
          award: () => typeof window !== "undefined" && window.location.replace('/awards'),
          blog:() => {window.open('https://dev.to/swapnadeepmohapatra/', '_blank'); return "opened"},
          project: () => typeof window !== "undefined" && window.location.replace('/projects'),
          talk: () => typeof window !== "undefined" && window.location.replace('/talks'),
          win:  () => {
            fetch(`${URL}/api/won-puzzle`);
            window.location.replace('/')
            return "Congrats You Have Won. Well Played"
          },
          showmsg: () => "Some Random Message",
          popup: () => alert('Haha')
        }}
        descriptions={{
          'open-google': 'opens google.com',
          showmsg: 'shows a message',
          alert: 'alert', popup: 'alert',
          home:"go back to home",
          work:"go to work experience page",
          award:"go to achivements page",
          win:"won the puzzle",
          blog:"go to blogs page",
          project:"go to projects page",
          talk:"go to talks page",
        }}
      msg="Welcome!!! Type help to learn more."
      />
    </Main>
  );
}

const Main = styled.main`
  * {
    margin: 0;
    padding: 0;
  }
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Terminal;
