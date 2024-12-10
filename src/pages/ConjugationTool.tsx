import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ConjugationTool: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div id="conjugation-tool">
      <header>
        <h1>Verb Conjugation</h1>
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Tools
        </button>
      </header>
      <main className="conjugation-content">
        <div className="conjugation-container">
          <p>Verb conjugation trainer coming soon!</p>
        </div>
      </main>
    </div>
  );
};