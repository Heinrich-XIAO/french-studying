export function createToolCard(tool: { id: string; name: string; description: string; comingSoon: boolean }): HTMLElement {
  const card = document.createElement('div');
  card.className = 'tool-card';
  
  card.addEventListener('click', () => {
    if (!tool.comingSoon) {
      window.location.href = `/src/tools/${tool.id}/`;
    }
  });
  
  const content = `
    <h2>${tool.name}</h2>
    <p>${tool.description}</p>
    ${tool.comingSoon ? '<span class="coming-soon">Coming Soon</span>' : ''}
  `;
  
  card.innerHTML = content;
  return card;
}