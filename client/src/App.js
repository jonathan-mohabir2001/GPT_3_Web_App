
/*
Main App component utilizing React Router to define the 
routes for the other components.

*/

import './App.css';
import Home from './components/Home';
import GenerateContent from './components/GenerateContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<GenerateContent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
