# Substack Focus Sidebar (Chrome Extension)

Uma extensão para Google Chrome que permite abrir o Substack na barra lateral (Side Panel) com uma visualização limpa e focada no feed de leitura.

## 🚀 Funcionalidades

- **Integração com Side Panel**: Abre o Substack diretamente na barra lateral do navegador.
- **Modo Foco**: Remove automaticamente cabeçalhos, rodapés e barras laterais do Substack, mantendo apenas o conteúdo principal.
- **Bypass de X-Frame-Options**: Utiliza regras de rede declarativas para permitir o carregamento do Substack em iframes.

## 🛠️ Instalação (Modo Desenvolvedor)

1. Clone este repositório ou baixe os arquivos.
2. Abra o Chrome e acesse `chrome://extensions/`.
3. Ative o **Modo do desenvolvedor** no canto superior direito.
4. Clique em **Carregar sem compactação** (Load unpacked).
5. Selecione a pasta raiz deste projeto.

## 📂 Estrutura do Projeto

- `manifest.json`: Configurações da extensão (Manifest V3).
- `background.js`: Gerencia a abertura do painel lateral.
- `rules.json`: Regras para permitir o carregamento do site em iframe.
- `popup/`: Contém o HTML/JS/CSS do painel lateral.
- `scripts/`: Scripts injetados na página (Content Scripts).

## 🤝 Contribuição

Sinta-se à vontade para abrir Issues ou Pull Requests para melhorar a funcionalidade de isolamento de elementos CSS, visto que o Substack atualiza suas classes frequentemente.