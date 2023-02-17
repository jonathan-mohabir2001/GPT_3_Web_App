import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="main-div">
      <header className="home-header">
        <h1>Generator Buddy</h1>
      </header>

      <main className="main-home-section">
        <h3>What is MERN Stack?</h3>
        <p>
          MERN is a free and open-source JavaScript software stack for building
          dynamic web sites and web applications. MERN is a full-stack
          JavaScript solution that helps you build fast, robust, and
          maintainable production web applications using MongoDB, Express,
          React, and Node.js (MERN) technology.
        </p>

        <h3>Open AI API</h3>
        <p>
          OpenAI is a San Francisco-based artificial intelligence research
          company founded in 2015 by Elon Musk, Sam Altman, Ilya Sutskever, and
          Greg Brockman. OpenAI is a non-profit research company that aims to
          ensure that artificial general intelligence benefits all of humanity.
        </p>

        <h1>What is this App?</h1>
      </main>

      <footer className="home-footer">
        <nav className="nav justify-content-center nav-tabs">
          <span></span>
          <span></span>
          <button type="button" className="btn btn-light btn-lg">
            <Link to="/generate">Follow Me to Find out </Link>
          </button>
        </nav>
      </footer>
    </div>
  );
}

export default Home;
