// Configura a extensão para abrir o painel lateral ao clicar no ícone
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));
