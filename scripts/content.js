// scripts/content.js

(function() {
  /**
   * NOTA PARA DESENVOLVEDORES:
   * O Substack usa classes geradas dinamicamente (ex: flex-grow-rzmknG).
   * Se o layout quebrar, verifique se as classes abaixo ainda existem no DOM do site.
   */
  const css = `
    /* ESTRATÉGIA DE ISOLAMENTO */
    /* Oculta tudo por padrão para dar o efeito de "apenas o feed" */
    body {
      visibility: hidden !important;
      overflow: hidden !important;
      background-color: #fff !important;
    }

    /* 
      Elemento alvo (Feed Principal) 
      Tornamos visível, fixamos no topo e forçamos ocupar 100% da viewport.
    */
    div.pencraft.pc-display-flex.pc-paddingTop-16.pc-justifyContent-center {
      visibility: visible !important;
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      z-index: 2147483647 !important; /* Z-index máximo */
      overflow-y: auto !important;
      background-color: #ffffff !important;
      margin: 0 !important;
      padding: 10px !important;
      box-sizing: border-box !important;
      align-items: center !important;
      display: flex !important;
      flex-direction: column !important;
    }

    /* Garante que os filhos do container ocupem a largura correta */
    div.pencraft.pc-display-flex.pc-paddingTop-16.pc-justifyContent-center > div {
      max-width: 100% !important;
      width: 100% !important;
    }

    /* Reset básico */
    * {
      box-sizing: border-box;
    }

    /* Scrollbar estilizada para combinar com o tema */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #FF6719; /* Laranja Substack */
      border-radius: 4px;
    }
  `;

  try {
    const style = document.createElement('style');
    style.id = 'substack-focus-sidebar-style';
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    (document.head || document.documentElement).appendChild(style);
    
    console.log("Substack Focus Sidebar: Estilos injetados com sucesso.");
  } catch (e) {
    console.error("Substack Focus Sidebar: Erro ao injetar estilos.", e);
  }
})();