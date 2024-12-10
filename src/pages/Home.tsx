import React from 'react';
import { ToolsGrid } from '../components/ToolsGrid';
import { studyTools } from '../data/tools';

export const Home: React.FC = () => {
  return (
    <div>
      <div className="header">
        <h1>French Learning Tools</h1>
        <p>Select a tool to begin your French learning journey</p>
      </div>
      <ToolsGrid tools={studyTools} />
    </div>
  );
};