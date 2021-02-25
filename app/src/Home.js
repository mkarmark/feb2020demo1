import React from 'react';
import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my demo site! 
        </p>
        <a
          className="App-link"
          href="/tvshows"
        >
          Let's check out Mitali's quarantine TV journal
        </a>
        <a
          className="App-link"
          href="/puppies"
        >
          Random puppy image generator
        </a>
      </header>
    </div>
  );
}

export default Home;
