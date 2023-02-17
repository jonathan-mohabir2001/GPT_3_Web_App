import React, { useState } from 'react';

function GenerateContent() {
  const [prompt, setPrompt] = useState('');

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can send the prompt to your backend here
    console.log(prompt);
  };

  return (
    <div className="container my-5 p-3 rounded">
      <header className="form-header mb-4">
        <h1>Enter in your Prompt Below</h1>
      </header>

      <section className="form-process-info mb-4">
        <h4>Submitting a Prompt To the Open AI API to be processed</h4>
      </section>

      <section className="form-section">
        <form
          className="row row-cols-lg-auto g-3 align-items-center"
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Enter Your Prompt Below for GPT-3 to Process
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={prompt}
              onChange={handlePromptChange}
            ></textarea>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default GenerateContent;
