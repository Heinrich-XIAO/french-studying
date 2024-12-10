import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StudyTool } from '../types';

interface ToolCardProps {
  tool: StudyTool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!tool.comingSoon) {
      navigate(`/tools/${tool.id}`);
    }
  };

  return (
    <div className="tool-card" onClick={handleClick}>
      <h2>{tool.name}</h2>
      <p>{tool.description}</p>
      {tool.comingSoon && <span className="coming-soon">Coming Soon</span>}
    </div>
  );
};