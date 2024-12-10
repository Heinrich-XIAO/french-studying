import React from 'react';
import { StudyTool } from '../types';
import { ToolCard } from './ToolCard';

interface ToolsGridProps {
  tools: StudyTool[];
}

export const ToolsGrid: React.FC<ToolsGridProps> = ({ tools }) => {
  return (
    <div className="tools-grid">
      {tools.map(tool => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
};