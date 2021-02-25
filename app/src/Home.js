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
          Let's check out the top tv shows in 2020
        </a>
      </header>
    </div>
  );
}

export default Home;
