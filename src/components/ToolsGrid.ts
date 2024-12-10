import { StudyTool } from '../types';
import { createToolCard } from './ToolCard';

export function createToolsGrid(tools: StudyTool[]): HTMLElement {
  const grid = document.createElement('div');
  grid.className = 'tools-grid';
  
  tools.forEach(tool => {
    const card = createToolCard(tool);
    grid.appendChild(card);
  });
  
  return grid;
}