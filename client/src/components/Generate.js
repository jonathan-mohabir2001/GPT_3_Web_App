import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPrompt, addResponse } from '../store/reducers/chat';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';

function Generate() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const prompts = useSelector((state) => state.chat.prompts);
  const responses = useSelector((state) => state.chat.responses);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await axios.post('http://localhost:3001/completion', {
      prompt: input,
    });
    dispatch(addPrompt(input));
    dispatch(addResponse(response.data));
    setInput('');
    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="mb-4">Generate Some Responses</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="promptTextArea" className="sr-only">Enter your prompt</label>
              <textarea
                className="form-control mb-3"
                id="promptTextArea"
                rows="5"
                placeholder="Ask me anything! I've been trained on a lot of data."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                disabled={!input || loading}
              >
                {loading ?
                  <Spinner animation="border" size="sm" role="status" className="mr-2">
                    <span className="sr-only">Generating response</span>
                  </Spinner>
                  : null
                }
                Generate
              </button>
            </div>
          </form>

          <div className="mt-4">
            <h4 className="mb-3">Recent Prompts</h4>
            {prompts.map((prompt, index) => (
              <p key={index}>{prompt}</p>
            ))}
          </div>
        </div>

        <div className="col-md-6">
          <h4 className="mb-3">Response</h4>
          {responses.length > 0 ? (
            <div className="card p-3 mb-3">
              <p className="mb-0">{responses[responses.length - 1]}</p>
            </div>
          ) : (
            <p className="text-muted">No response yet.</p>
          )}

          <div className="mt-4">
            <h4 className="mb-3">Recent Responses</h4>
            {responses.slice(0, 5).map((response, index) => (
              <div className="card mb-3" key={index}>
                <div className="card-body p-3">
                  <p className="mb-0">{response}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="home-footer fixed-bottom bg-light py-3 mt-5">
        <p className="text-center mb-0">Developed By Jonathan Mohabir</p>
        <p className="text-center mb-0">API source: OpenAi</p>
        <p className="text-center mb-0">Model: DaVinci</p>
      </footer>
    </div>
  );
}

export default Generate
