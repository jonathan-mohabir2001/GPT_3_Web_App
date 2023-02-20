import React, { useState } from 'react';
import axios from 'axios';

function Generate() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await axios.post('http://localhost:3001/completion', {
      prompt: input,
    });
    setResponse(response.data);
    setLoading(false);
  };

  const lines = response.split('\n');

  return (
    <div className="container" id="main-form-section">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Generate Some Responses</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Ask me anything! I've been trained on a lot of data."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        <div className="col-md-6">
  {loading ? (
    <div className="spinner-border" role="status">
      <span className="sr-only">Generating response</span>
    </div>
  ) : (
    <div className="response-container">
      {response.split('\n').map((line, index) => (
        <div key={index}>
          {line}
          <br />
        </div>
      ))}
    </div>
  )}
</div>


        <footer className="home-footer fixed-bottom bg-light py-3">
          <p className="text-center mb-0">Developed By Jonathan Mohabir</p>
          <p className="text-center mb-0">API source: OpenAi</p>
        </footer>
      </div>

      <style jsx>{`
        .response-container {
          background-color: #f5f5f5;
          padding: 10px;
          border-radius: 5px;
        }

        .response-container p {
          margin: 0 0 10px;
          font-size: 16px;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}

export default Generate;
