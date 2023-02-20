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
          This is a Full-Stack web application created with MERN. This is the
          landing page you are currently on.
        </p>

        <p>
          On the next page you're gonna meet a text input section and you can
          ask this little box anything you want. It will then generate a
          response based on the question you asked.
        </p>

        <p>MERN stands for MongoDB Express React and Node.</p>
        <ul className="unorderd-list">
          <li>MongoDB is a NoSQL database</li>
          <li>Express is a web framework for Node.js</li>
          <li>React is a JavaScript library for building user interfaces</li>
          <li>Node.js is a JavaScript runtime environment</li>
        </ul>
      </section>
      <section className="my-5">
        <h2>How does it work?</h2>
        <p className="lead">
          Well, this is a full-stack application so it's gonna be a little
          complicated to explain. But I'll try my best.
        </p>

        <p>
          The front-end is built with React and the back-end is built with
          Express. The front-end is responsible for the user interface and the
          back-end is responsible for the server-side logic. That's it in a nut
        </p>

        <p>
          On the next page you're gonna meet a text input section and you can
          ask this little box what you want.
        </p>

        <p>
          The box is using Express and Node.js to communicate with the OpenAI
          API. The OpenAI API is a machine learning API that uses a deep
          learning model called GPT-3. GPT-3 is a language model that can
          generate text.
        </p>
      </section>
      <section className="my-5">
        <h2>What can I do with it?</h2>
        <p className="lead">
          Ask it questions, tell it stories, ask it to write a poem, ask it to
          write a song, ask it to write a book, ask it to write a movie script,
          ask it to write a speech, ask it to write a blog post, ask it to write
          a news article, ask it to write a Wikipedia article, ask it to write a
          propsal for a new business, ask it to write a business plan, ask it to
          write a resume.... you get the point.
        </p>

        <div className="d-flex justify-content-center align-items-center flex-column">
          <p>It's time for you to head over to the next page</p>
          <Link to="/generate" className="btn btn-primary">
            <Generate />
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
