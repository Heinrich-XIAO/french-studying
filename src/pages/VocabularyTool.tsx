import React from 'react';
import { useNavigate } from 'react-router-dom';

export const VocabularyTool: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div id="vocabulary-tool">
      <header>
        <h1>Vocabulary Trainer</h1>
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Tools
        </button>
      </header>
      <main className="vocabulary-content">
        <div className="flashcard-container">
          <p>Vocabulary trainer coming soon!</p>
        </div>
      </main>
    </div>
  );
};