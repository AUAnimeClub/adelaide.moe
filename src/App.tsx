import React from 'react';
import './App.css';
import styled from "styled-components";

const LogoImage = styled.img`
  max-width: 200px;
  margin-bottom: 40px;
`;

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <LogoImage src="/logo512.png"/>
        Adelaide University Anime Club
      </div>
    </div>
  );
}

export default App;
