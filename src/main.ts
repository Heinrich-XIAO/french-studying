import './style.css';
import { studyTools } from './data/tools';
import { createToolsGrid } from './components/ToolsGrid';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="header">
    <h1>French Learning Tools</h1>
    <p>Select a tool to begin your French learning journey</p>
  </div>
`;

const toolsGrid = createToolsGrid(studyTools);
document.querySelector<HTMLDivElement>('#app')!.appendChild(toolsGrid);