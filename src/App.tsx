import React from 'react';
import './App.css';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDiscord} from "@fortawesome/free-brands-svg-icons";
import Particles from "react-tsparticles";

const bgcolor = 'rgba(40, 44, 52, 0.8)';

const MainHeader = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  background: linear-gradient(0deg, ${bgcolor}, ${bgcolor}),
  url('./images/background-3.jpg') no-repeat center center fixed;
  background-size: cover;
`;

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

function PetalParticles() {
  return <Particles style={{
    position: "absolute",
    width: '100%',
    height: '100%',
  }} options={{
    particles: {
      number: {
        value: 20,
      },
      color: {
        value: "#fff",
      },
      move: {
        bounce: false,
        direction: 'bottom',
        enable: true,
        random: false,
        straight: false,
        speed: 1,
      },
      shape: {
        type: "image",
        image: [
          { src: '/particles/petal-1.png' },
          { src: '/particles/petal-2.png' },
        ]
      },
      rotate: {
        random: true,
        value: 100,
      },
      size: {
        random: { enable: true, minimumValue: 5 },
        value: 10,
      },
    },
  }}/>
}

function App() {
  return (
    <div className="App">
      <MainHeader style={{color: '#F0E6E7'}}>
        <PetalParticles />
        <LogoImage src="/logo512.png"/>
        Anime Club Putting the "We" in "Weeaboo"
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
      </MainHeader>
    </div>
  );
}

export default App;
