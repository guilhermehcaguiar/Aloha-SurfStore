# 🌊 Aloha Surf Store - E-commerce Mobile
### Projeto Acadêmico da Disciplina de Mobile Code

Este é um aplicativo de e-commerce funcional desenvolvido em **React Native** com **Expo**. O projeto simula uma loja de produtos de surf, focando na organização de código, navegação entre telas e exibição dinâmica de dados, seguindo rigorosamente a estrutura de pastas e funcionalidades solicitadas.

## 🎯 Objetivo do Projeto
Desenvolver um MVP (Produto Mínimo Viável) que demonstre o domínio das seguintes competências em desenvolvimento mobile:
- Estruturação de pastas modular (`assets`, `components`, `screens`).
- Implementação de navegação em pilha (**Stack Navigator**).
- Listagem otimizada de produtos com `FlatList` (contendo 11 itens).
- Criação e reutilização de componentes customizados (`Card` e `Button`).
- Passagem de parâmetros e dados dinâmicos entre telas.

## 🚀 Funcionalidades
- **Home:** Apresentação da marca com menu de acesso rápido às seções do app.
- **Loja (Listagem):** Catálogo com mais de 10 produtos de surf (Pranchas, Wetsuits, Acessórios) exibidos em Cards personalizados.
- **Detalhes:** Exibição completa das informações de cada item (imagem, preço e descrição), carregadas via navegação.
- **Perfil:** Área do usuário com informações de conta e preferências do surfista.

## 📁 Estrutura de Pastas
O projeto está organizado da seguinte forma:
- `assets/`: Recursos visuais, ícones e imagens de referência.
- `components/`: Componentes de interface reutilizáveis (`Card.js` e `Button.js`).
- `screens/`: Telas principais da aplicação (`HomeScreen.js`, `ListScreen.js`, `DetailScreen.js`, `ProfileScreen.js`).
- `App.js`: Configuração central da navegação (Stack) e ponto de entrada do App.
- `package.json`: Gerenciamento de dependências e scripts.
- `.gitignore`: Configuração de arquivos ignorados pelo Git.

## 🛠️ Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar e executar o ambiente de desenvolvimento:

1. **Instalar Dependências:**
   Abra o terminal na pasta raiz do projeto e execute o comando para baixar as bibliotecas necessárias:
   ```bash
   npm install
2. **Iniciar o Servidor Expo:**
   Para rodar o Metro Bundler (compilador), utilize o comando:
   ```bash
   npx expo start
3. **Visualizar o Aplicativo:**
   - **No Navegador:** Após o servidor iniciar, pressione a tecla **`w`** no seu teclado.
   - **No Celular:** Instale o app **Expo Go** (disponível na Play Store ou App Store) e escaneie o QR Code que aparece no terminal.

> **Nota:** Caso esteja utilizando o Wi-Fi da faculdade ou uma rede com restrições de firewall, utilize o comando `npx expo start --tunnel` para garantir a conexão com o seu dispositivo móvel.

---
*Desenvolvido por Guilherme Aguiar para fins acadêmicos - 2026*