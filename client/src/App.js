import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Generate from './components/Generate';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
