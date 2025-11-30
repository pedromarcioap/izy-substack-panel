// scripts/content.js

(function() {
  const css = `
    /* ESTRATÉGIA DE ISOLAMENTO */
    body {
      visibility: hidden !important;
      overflow: hidden !important;
      background-color: #fff !important;
    }

    /* Elemento alvo (Feed) */
    div.pencraft.pc-display-flex.pc-paddingTop-16.pc-justifyContent-center {
      visibility: visible !important;
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      z-index: 2147483647 !important;
      overflow-y: auto !important;
      background-color: #ffffff !important;
      margin: 0 !important;
      padding: 10px !important;
      box-sizing: border-box !important;
      align-items: center !important;
    }

    div.pencraft.pc-display-flex.pc-paddingTop-16.pc-justifyContent-center > div {
      max-width: 100% !important;
      width: 100% !important;
    }

    /* Reset básico */
    * {
      box-sizing: border-box;
    }

    /* Scrollbar estilizada */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #FF6719;
      border-radius: 4px;
    }
  `;

  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  (document.head || document.documentElement).appendChild(style);
  
  console.log("Substack Focus Mode ativado via scripts/content.js");
})();