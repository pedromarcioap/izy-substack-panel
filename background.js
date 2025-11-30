// background.js

// Garante que o painel lateral abra ao clicar no ícone da toolbar
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error("Erro ao configurar sidePanel:", error));

// Listener opcional para depuração ou inicialização
chrome.runtime.onInstalled.addListener(() => {
  console.log("Substack Focus Sidebar instalada com sucesso.");
});