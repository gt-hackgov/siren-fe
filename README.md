# SIREN - Next.js Frontend (demo)

Projeto demo em Next.js/React com telas básicas solicitadas:

- `pages/index.js` — landing page com tela dividida e formulário de login (email, senha, "logar como").
- `pages/dashboard.js` — página inicial para usuário logado com menu, mapa estático do Rio de Janeiro e lista de eventos ativos (cards).
- `components/MapRJ.js` — svg simplificado com círculos vermelhos e botões de zoom.
- `components/EventCard.js` — card de evento.
- `components/Navbar.js` — menu superior com opções.
- `styles/globals.css` — estilos.

# SIREN - Next.js Frontend (demo)

Projeto demo em Next.js/React com telas básicas solicitadas:

- `pages/index.js` — landing page com tela dividida e formulário de login (email, senha, "logar como").
- `pages/dashboard.js` — página inicial para usuário logado com menu, mapa estático do Rio de Janeiro e lista de eventos ativos (cards).
- `components/MapRJ.js` — utiliza um PNG estático (`public/map-rio.png`) com marcadores sobrepostos.
- `components/EventCard.js` — card de evento.
- `components/Navbar.js` — menu superior com opções.
- `styles/globals.css` — estilos.

Como rodar:

1. Instale dependências:

```bash
npm install
```

2. Rode em modo de desenvolvimento:

```bash
npm run dev
# abra http://localhost:3000
```

Notas importantes:

- Login é simulado: os dados são salvos em `localStorage` e não há backend.
- Mapa estático: coloque a imagem `map-rio.png` (PNG do mapa do Rio de Janeiro) na pasta `images/` do projeto — caminho final: `images/map-rio.png`.
	- O projeto expõe a rota `/api/map-rio` que serve o arquivo diretamente do disco. Isso permite manter a imagem em `images/` sem movê-la para `public/`.
- Marcadores: os círculos sobre o mapa são renderizados como elementos HTML com fundo em vermelho translúcido (`rgba(220,20,60,0.4)`) e borda escura (`rgba(0,0,0,0.6)`), conforme solicitado.

Recomendações:

- Para mapa interativo, considere integrar Leaflet ou Mapbox e usar marcadores dinâmicos.
- Use `npm audit` e `npm outdated` regularmente e valide atualizações em um ambiente de teste.
