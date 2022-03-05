import React from 'react';
import './App.css';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDiscord} from "@fortawesome/free-brands-svg-icons";

const LogoImage = styled.img`
  max-width: 200px;
  margin-bottom: 40px;
`;

const Buttons = styled.div`
  margin-top: 20px;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 12px;
`;

const LinkButton = styled.a`
  color: white;
  background-color: #5865F2;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 4px;
  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
  }
`;

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <LogoImage src="/logo512.png"/>
        Adelaide University Anime Club - Website still under construction
        <Buttons>
          <LinkButton
            style={{ backgroundColor: '#FEBCF1', color: '#2A2B3C' }}
            href="https://docs.google.com/forms/d/e/1FAIpQLScS4ZdXr0yRc6cLNCc4QznaRK1dMB_XwzBJB15pX6BdBtPRgQ/viewform">
            Become a Member
          </LinkButton>
          <LinkButton href="https://discord.com/invite/6jyjCj7">
            <FontAwesomeIcon icon={faDiscord} /> Join Discord
          </LinkButton>
        </Buttons>
      </div>
    </div>
  );
}

export default App;
