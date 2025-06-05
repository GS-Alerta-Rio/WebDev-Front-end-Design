# Landing Page - Hydrome

## Descrição do Projeto

Este projeto é uma landing page responsiva desenvolvida para apresentar a solução "Hydrome", um dispositivo de monitoramento de enchentes. A página detalha o problema que o Hydrome visa resolver, as tecnologias utilizadas, seus objetivos, o público-alvo, os benefícios da solução e como ela se integra ao dia a dia dos usuários.

O site possui um design limpo, com seções bem definidas e um slideshow de banners. Inclui também um seletor de temas (padrão, claro e escuro) para melhorar a experiência do usuário e um menu de navegação responsivo (menu hambúrguer) para dispositivos móveis.

## Funcionalidades

*   **Design Responsivo:** Adapta-se a diferentes tamanhos de tela (desktop, tablets e mobile).
*   **Menu de Navegação Responsivo:** Menu hambúrguer para fácil navegação em dispositivos móveis.
*   **Slideshow de Banners:** Apresentação visual dinâmica no topo da página.
*   **Seletor de Temas:** Permite ao usuário alternar entre três temas de cores (padrão, claro e escuro). A preferência de tema é salva no `localStorage`.
*   **Seções Informativas:**
    *   O Problema que Resolvemos
    *   Tecnologias Utilizadas
    *   Nossos Objetivos
    *   Público-Alvo Impactado
    *   Benefícios da Solução
    *   No dia a dia dos usuários
*   **Links de Navegação Interna:** Facilitam o acesso às diferentes seções da página.
*   **Estilização Moderna:** Uso de Google Fonts (Inter) e layout baseado em cards.

## Tecnologias Utilizadas

*   **HTML5:** Estrutura semântica da página.
*   **CSS3:** Estilização, layout (Flexbox) e responsividade (Media Queries).
*   **JavaScript (Vanilla):**
    *   Lógica do slideshow de banners.
    *   Funcionalidade do seletor de temas.
    *   Controle do menu hambúrguer.

## Estrutura do Projeto

```
/
├── index.html                // Arquivo principal da landing page
├── README.md                 // Este arquivo
└── src/
    ├── css/
    │   ├── style.css         // Estilos principais e responsividade
    │   ├── landingpage.css   // Estilos específicos da landing page (se houver separação)
    │   └── slideshow.css     // Estilos do slideshow
    ├── js/
    │   └── script.js         // Scripts JavaScript para interatividade
    └── assets/
        └── imgs/             // Imagens utilizadas no projeto (logos, banners, ícones, etc.)
```

## Como Visualizar o Projeto

1.  Clone este repositório (se aplicável) ou baixe os arquivos.
2.  Abra o arquivo `index.html` em qualquer navegador web moderno (Google Chrome, Firefox, Edge, etc.).

## Como Usar

*   **Navegação:** Utilize os links no menu superior (ou no menu hambúrguer em dispositivos móveis) para navegar pelas diferentes seções da página.
*   **Slideshow:** Clique nas setas laterais do slideshow para avançar ou retroceder os banners.
*   **Seletor de Temas:** Clique nos ícones coloridos no canto superior direito da navegação para alterar o tema de cores do site. Sua escolha será lembrada na próxima visita.

## Possíveis Melhorias Futuras

*   Adicionar animações mais elaboradas nas transições de seções ou ao rolar a página.
*   Integrar um formulário de contato.
*   Otimizar ainda mais as imagens para melhor performance.
*   Adicionar testes unitários ou de interface.
