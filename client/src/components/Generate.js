import React from 'react';
import { useState } from 'react';
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

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Generate Some Responses </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Ask me anything"
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
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <p>{response}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Generate;
