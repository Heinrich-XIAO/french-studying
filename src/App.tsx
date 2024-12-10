import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ConjugationTool } from './pages/ConjugationTool';

const App: React.FC = () => {
  return (
    <Router>
      <div id="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools/conjugation" element={<ConjugationTool />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
