import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StudyTool } from '../types';

interface ToolCardProps {
  tool: StudyTool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const navigate = useNavigate();

  const handleClick = () => {
		navigate(`/tools/${tool.id}`);
  };

  return (
    <div className="tool-card" onClick={handleClick}>
      <h2>{tool.name}</h2>
    </div>
  );
};
