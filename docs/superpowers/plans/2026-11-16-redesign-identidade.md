# Redesign com identidade própria — plano de implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Trocar o visual genérico do portfólio pela identidade "Rota autônoma" (campo da FTC + robô) com seções em formato de ficha técnica, voltada a recrutadores.

**Architecture:** SPA React existente (Vite + react-router). A lógica pura (navegação do robô, detector da palavra secreta) fica em `src/lib/` com testes Vitest. O canvas da entrada e as seções viram componentes pequenos em `src/components/`; todo o texto fica num único `src/content.ts`. O Three.js só é importado de forma dinâmica pela seção de robótica.

**Tech Stack:** React 19, Vite 7, TypeScript 5.9, Tailwind 3, gsap + @gsap/react, lenis, three, @fontsource/archivo, @fontsource/jetbrains-mono, vitest.

**Spec:** `docs/superpowers/specs/2026-11-16-redesign-identidade-design.md`

## Global Constraints

- Cores: `paper #ECE9E2`, `ink #151515`, `ink-soft #5C5953`, `signal #FF4F1A` (gráfico e elementos grandes), `signal-text #B83A10` (texto pequeno). Linhas do campo: ink a 8%.
- Fontes: Archivo 800 nos títulos, Archivo 400/500 no corpo, JetBrains Mono 400/500 em rótulos e dados. Cantos retos.
- Proibido: degradê, glow, blur decorativo, pílulas coloridas, emoji, número sem fonte, dado real da TH.
- `prefers-reduced-motion: reduce` → sem Lenis, sem animação contínua, rota desenhada parada.
- Textos em pt-BR; conteúdo vem de `C:\Cerebro\Pessoal\LinkedIn - perfil.md` (já está copiado no spec).
- Links: LinkedIn `https://www.linkedin.com/in/fernando-quintanilha`, GitHub `https://github.com/Fernando-Quintanilha`, e-mail `fehdacostaquintanilhafilho@gmail.com`, WhatsApp `https://wa.me/5562984048425`.
- Sem commit nem push até o usuário pedir (regra do usuário). Trabalho na branch `redesign-identidade`.

## Review Focus

1. Celular: tocar no campo define o destino, mas arrastar o dedo continua rolando a página (sem `preventDefault` no touch). → teste manual na Task 3 em 375 px.
2. Redimensionar ou girar a tela: o canvas se ajusta (DPR incluído) e o robô continua dentro do campo. → `clampToField` testado na Task 2.
3. Aba oculta por minutos: ao voltar, o robô não "teleporta" (dt limitado). → teste `limita dt grande` na Task 2.
4. Modelo 3D ausente ou com erro de carga: a seção mostra a foto e o site não quebra. → Task 7, passo de verificação com `robotModelUrl` nulo.
5. Digitar `rawr` com Shift ou CapsLock, ou com outras teclas no meio: só a sequência exata (sem diferenciar maiúsculas) dispara. → testes na Task 9.

---

### Task 1: Base (dependências, tokens, fontes, limpeza)

**Files:**
- Modify: `package.json`, `tailwind.config.js`, `index.html`, `src/index.css`, `src/main.tsx`, `vite.config.ts`
- Create: `src/hooks/useReducedMotion.ts`, `public/favicon.svg`
- Delete: `src/App.css`, `src/assets/react.svg`, `public/vite.svg`, `src/components/{Services,Testimonials,CTA}/`

**Interfaces:**
- Produces: classes Tailwind `bg-paper text-ink text-ink-soft text-signal text-signal-text border-ink`, `font-display` (Archivo), `font-mono` (JetBrains Mono); `useReducedMotion(): boolean`.

- [ ] **Step 1:** `npm i gsap @gsap/react lenis three @fontsource/archivo @fontsource/jetbrains-mono` e `npm i -D vitest @types/three`. Script `"test": "vitest run"`.
- [ ] **Step 2:** Tokens no `tailwind.config.js` (cores do Global Constraints; `fontFamily.display: ['Archivo', ...]`, `fontFamily.mono: ['"JetBrains Mono"', ...]`, `sans` = Archivo). Importar os pesos 400/500/800 e 400/500 no `main.tsx`.
- [ ] **Step 3:** `index.html`: `lang="pt-BR"`, `<title>Fernando Quintanilha — desenvolvedor back-end</title>`, meta description, `og:title`, `og:description`, `theme-color #ECE9E2`, favicon `/favicon.svg` (texto `FQ/` em ink sobre paper).
- [ ] **Step 4:** `src/index.css`: body `bg-paper text-ink antialiased`, `::selection` em signal; remover `scroll-behavior: smooth` (o Lenis cuida disso).
- [ ] **Step 5:** `useReducedMotion` com `matchMedia('(prefers-reduced-motion: reduce)')` e listener de mudança.
- [ ] **Step 6:** Rodar `npm run build`. Esperado: build sem erro. (Home pode ficar quebrada visualmente até a Task 4.)

### Task 2: Navegação do robô (lógica pura, TDD)

**Files:**
- Create: `src/lib/robot.ts`, `src/lib/robot.test.ts`

**Interfaces:**
- Produces:
  - `type Vec = { x: number; y: number }`
  - `type RobotState = { x: number; y: number; heading: number }` (radianos; unidades do campo 0..1 em x e y)
  - `stepRobot(s: RobotState, target: Vec, dtMs: number): RobotState`
  - `clampToField(p: Vec, margin?: number): Vec` (margem padrão 0.04)
  - `reached(s: RobotState, target: Vec): boolean` (distância < 0.012)
  - `readout(s: RobotState): string` → `"x 1.42  y 0.87  θ 34°"` (x e y × 3.66, isto é, metros num campo de 12 pés, com 2 casas; θ inteiro 0–359)
  - `DEFAULT_ROUTE: Vec[]` com 5 pontos dentro de 0.15–0.9

- [ ] **Step 1: Testes que falham** em `robot.test.ts`:
  - `aproxima do alvo`: depois de 200 passos de 16 ms rumo a `{x:.8,y:.3}` partindo de `{x:.2,y:.7,heading:0}`, `reached` é verdadeiro.
  - `vira pelo menor ângulo`: heading 350° com alvo a 10° → depois de um passo, heading cresce passando por 0, não decresce.
  - `limita dt grande`: `stepRobot(s, alvo, 60000)` anda no máximo o mesmo que com dt 50 ms.
  - `clampToField`: `{x:-1,y:2}` → `{x:.04,y:.96}`.
  - `readout`: `{x:.5,y:.3,heading:Math.PI/2}` → `"x 1.83  y 1.10  θ 90°"`.
- [ ] **Step 2:** `npm test`. Esperado: FALHA (módulo não existe).
- [ ] **Step 3:** Implementar. Controle: erro angular normalizado com `atan2(sin, cos)`; a taxa de giro é proporcional ao erro, com teto de 4 rad/s; a velocidade é proporcional à distância, com teto de 0.35 campo/s, e cai quando o erro angular é grande (`* max(0, cos(erro))`); dt é limitado a 50 ms.
- [ ] **Step 4:** `npm test`. Esperado: PASSA.

### Task 3: Canvas do campo e entrada

**Files:**
- Create: `src/components/Field/FieldCanvas.tsx`, `src/components/Field/drawField.ts`, `src/components/Field/drawRobot.ts`, `src/components/Hero/index.tsx` (substitui o atual)

**Interfaces:**
- Consumes: tudo da Task 2; `useReducedMotion`.
- Produces: `<FieldCanvas onReadout?: (text: string) => void, obstacle?: Vec | null />` (o `obstacle` é usado pelo dinossauro na Task 9: o robô mira um ponto deslocado 0.12 para longe dele enquanto estiver a menos de 0.15); `drawRobot(ctx, s: RobotState, sizePx: number)`.

- [ ] **Step 1:** `drawField(ctx, w, h)`: grade 6×6 a 8% de ink com subgrade de 3 por placa a 4%.
- [ ] **Step 2:** `drawRobot`: robô provisório visto de cima: chassi quadrado em ink, 4 rodas (retângulos com hachura diagonal, como mecanum) e uma seta de frente em signal. Tamanho: 4,5% do lado menor do campo.
- [ ] **Step 3:** `FieldCanvas`: laço com `requestAnimationFrame`; o rastro guarda até 260 pontos e é desenhado tracejado (3/4) em signal com 1,5 px; cruz de mira no alvo; clique ou `pointerup` converte para 0..1 e chama `clampToField`; depois de `reached` num alvo do usuário, volta para `DEFAULT_ROUTE`. Ajusta o tamanho com `ResizeObserver` e DPR. Pausa com IntersectionObserver e `visibilitychange`. Com reduced motion: desenha `DEFAULT_ROUTE` como rota estática e o robô parado no primeiro ponto, sem laço.
- [ ] **Step 4:** `Hero`: seção `min-h-[100svh]` com o canvas ao fundo (`cursor-crosshair`); nome em `font-display font-extrabold` (clamp 3.5rem → 9rem, tracking -0.04em, em duas linhas); frase em mono; links (currículo → LinkedIn por enquanto, GitHub, LinkedIn, e-mail) em mono com sublinhado; readout no canto inferior direito em `text-signal-text`; dica "clique no campo" em mono `ink-soft`. O texto fica com `pointer-events-none`, menos os links.
- [ ] **Step 5:** `npm run dev`. Verificação no navegador: o robô percorre a rota, o clique muda o destino, em 375 px a página rola arrastando por cima do campo, e com reduced motion emulado aparece a rota parada.

### Task 4: Estrutura da página, navegação e rolagem

**Files:**
- Create: `src/content.ts`, `src/components/Section/index.tsx`, `src/hooks/useSmoothScroll.ts`, `src/lib/gsap.ts`
- Modify: `src/components/Navbar/index.tsx`, `src/pages/Home/index.tsx`, `src/App.tsx`

**Interfaces:**
- Produces:
  - `src/lib/gsap.ts`: registra `ScrollTrigger` e `SplitText` uma vez e exporta `gsap`.
  - `useSmoothScroll()`: cria o Lenis (desligado com reduced motion), liga em `ScrollTrigger.update` e expõe `scrollTo(id: string)` por contexto ou retorno.
  - `<Section id: string, index: '01'|'02'|'03'|'04', title: string, children />`: filete superior de 2 px em ink que se desenha (scaleX 0→1), rótulo mono `01 — trabalho` e título Archivo 800 revelado por linha com SplitText. Com reduced motion, sem animação.
  - `content.ts`: objetos tipados `profile`, `work`, `projects`, `robotics`, `contact`, com os textos e números exatos do spec.

- [ ] **Step 1:** Escrever `content.ts` copiando os textos do spec (seções 00–04).
- [ ] **Step 2:** Navbar fixa, fundo paper, borda inferior de 1 px ink/15: `FQ/` · `01 trabalho · 02 projetos · 03 robótica · 04 contato` · `currículo ↗`. No mobile: botão "menu" em mono que abre lista em tela cheia (paper) e fecha ao escolher.
- [ ] **Step 3:** Home = `Hero` + 4 `Section` (placeholders até as Tasks 5–8). `App` sem as classes do tema antigo.
- [ ] **Step 4:** `npm run build && npm run lint`. Esperado: sem erro.

### Task 5: 01 Trabalho

**Files:**
- Create: `src/components/Work/index.tsx`, `src/components/Counter/index.tsx`

**Interfaces:**
- Consumes: `work` de `content.ts`; `Section`.
- Produces: `<Counter value: number, format?: (n: number) => string />`: anima de 0 até o valor em 1,4 s com ease-out quando entra na tela (`toLocaleString('pt-BR')`); com reduced motion mostra o valor direto.

- [ ] **Step 1:** Cabeçalho de ficha em mono (empresa · cargo · período · cidade).
- [ ] **Step 2:** Grade de 5 números (2 colunas no mobile, 3 no desktop), com número em Archivo 800 `text-signal` e legenda em mono. Os que não são inteiros simples (`10 → 17`, `~8,6 mil`) aparecem como texto, sem contador.
- [ ] **Step 3:** Lista de sistemas em linhas separadas por filete: nome à esquerda, uma frase e a stack em mono à direita.
- [ ] **Step 4:** Verificar no navegador nas larguras 375 e 1280.

### Task 6: 02 Projetos

**Files:**
- Create: `src/components/Projects/index.tsx` (substitui o atual)

**Interfaces:**
- Consumes: `projects` de `content.ts` (`{ n, name, summary, stack: string[], links: {label, href}[], image?: string }`).

- [ ] **Step 1:** Linhas numeradas: `01` mono, nome em Archivo 800, resumo e stack em mono, links com ↗.
- [ ] **Step 2:** Desktop (`hover: hover`): imagem de 320 px segue o cursor dentro da linha ao passar o mouse (gsap `quickTo`). Mobile: imagem na própria linha, com proporção 16:10. O TimeShape fica sem imagem até ter um print.
- [ ] **Step 3:** Verificar os links e as imagens no navegador.

### Task 7: 03 Robótica

**Files:**
- Create: `src/components/Robotics/index.tsx`, `src/components/Robotics/RobotViewer.tsx`

**Interfaces:**
- Consumes: `robotics` de `content.ts` (com `robotModelUrl: string | null`, hoje `null`).
- Produces: `RobotViewer` (default export, carregado com `React.lazy`) recebe `url: string`; carrega com `GLTFLoader` e gira no eixo Y conforme o progresso de rolagem da seção (ScrollTrigger com scrub). No `onError`, avisa o pai, que volta para a foto.

- [ ] **Step 1:** Com `robotModelUrl === null`, mostrar `fernandoRobo.jpg` com moldura técnica: cantos de mira em ink e legenda mono "Into the Deep · 2024–25".
- [ ] **Step 2:** Texto curto, lista de prêmios em ficha (ano em mono à esquerda) e a linha da Atlas Tech.
- [ ] **Step 3:** `RobotViewer` montado só quando a seção está a menos de 1 tela de distância (IntersectionObserver com `rootMargin: '100% 0px'`).
- [ ] **Step 4:** Verificar que, com `null`, o build não inclui o Three.js no chunk principal (`npm run build` lista um chunk separado para o `RobotViewer`).

### Task 8: 04 Contato e rodapé

**Files:**
- Create: `src/components/Contact/index.tsx`
- Modify: `src/components/Footer/index.tsx`
- Delete: `src/components/About/` (o conteúdo vai para o Contato)

- [ ] **Step 1:** Sobre em 2–3 frases (com a linha do ARK, sem arte do jogo).
- [ ] **Step 2:** Contatos grandes em Archivo 800 com seta (e-mail com `mailto` correto, LinkedIn, GitHub); WhatsApp e currículo menores, em mono.
- [ ] **Step 3:** Rodapé em mono: `© {ano} Fernando Quintanilha · feito à mão em React · psst: digite rawr`.

### Task 9: Dinossauro, 404 e /links

**Files:**
- Create: `src/lib/secretWord.ts`, `src/lib/secretWord.test.ts`, `src/components/Dino/index.tsx`, `src/pages/NotFound/index.tsx`
- Modify: `src/pages/Links/index.tsx`, `src/App.tsx`, `src/components/Hero/index.tsx`, `src/components/Navbar/index.tsx`

**Interfaces:**
- Produces:
  - `createSecretMatcher(word: string): (key: string) => boolean`: devolve verdadeiro quando a última sequência digitada é a palavra (sem diferenciar maiúsculas); teclas com mais de 1 caractere (Shift, Enter) são ignoradas.
  - `<Dino walking: boolean, onDone: () => void, onPosition?: (p: Vec) => void />`: dinossauro SVG desenhado em linha (stroke ink 2 px, olho em signal), que atravessa o campo da esquerda para a direita em 6 s com passo animado; `onPosition` alimenta o `obstacle` do `FieldCanvas`.

- [ ] **Step 1: Testes que falham** em `secretWord.test.ts`: `"r","a","w","r"` → verdadeiro na última tecla; `"R","A","W","R"` → verdadeiro; `"r","a","x","w","r"` → falso; `"r","a","Shift","w","r"` → verdadeiro.
- [ ] **Step 2:** `npm test`. Esperado: FALHA.
- [ ] **Step 3:** Implementar `createSecretMatcher` (buffer com o tamanho da palavra).
- [ ] **Step 4:** `npm test`. Esperado: PASSA.
- [ ] **Step 5:** Ligar no Hero: `keydown` global, ou 5 toques no `FQ/` em até 2 s; o dinossauro atravessa e o robô desvia.
- [ ] **Step 6:** `NotFound` com o dinossauro parado e o texto "essa rota não existe" + link para o início; rota `*` no `App`.
- [ ] **Step 7:** `/links` refeito no visual novo, com links em filetes e sem a foto quebrada.

### Task 10: Fechamento

**Files:**
- Modify: `README.md`

- [ ] **Step 1:** README: o que é, stack, `npm run dev | build | test` e a seção "Trocar o robô 3D" (colocar `public/models/robot.glb` e preencher `robotModelUrl`).
- [ ] **Step 2:** `npm test && npm run lint && npm run build`. Esperado: tudo verde.
- [ ] **Step 3:** No navegador (pelo `vite preview`), em 375 px e 1280 px: entrada, as 4 seções, o menu mobile, `rawr`, `/links`, `/rota-inexistente` e reduced motion. Console sem erro.
- [ ] **Step 4:** Atualizar o vault: nota do projeto em `C:\Cerebro\Projetos\Pessoais\` e diário de 2026-11-16.
