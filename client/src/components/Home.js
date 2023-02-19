import React from 'react';
import Generate from './Generate';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-main-screen">
      <header className="text-center">
        <h1 className="display-4">AI MERN Application</h1>
      </header>
      <br />
      <br />
      <section className="my-5">
        <h2>What is this?</h2>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac leo
          auctor, faucibus ex non, tincidunt est.
        </p>
      </section>
      <section className="my-5">
        <h2>How does it work?</h2>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac leo
          auctor, faucibus ex non, tincidunt est.
        </p>
      </section>
      <section className="my-5">
        <h2>What can I do with it?</h2>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac leo
          auctor, faucibus ex non, tincidunt est.
        </p>

        <div className="d-flex justify-content-center align-items-center flex-column">
          <p>It's time for you to head over to the next page</p>
          <Link to="/generate" className="btn btn-primary">
            Generate
          </Link>
        </div>
      </section>

      <footer className="home-footer fixed-bottom bg-light py-3">
        <p className="text-center mb-0">Developed By Jonathan Mohabir</p>
        <p className="text-center mb-0">API source: OpenAi</p>
      </footer>
    </div>
  );
}

export default Home;
