# Portfólio — Fernando Quintanilha

Site pessoal de desenvolvedor back-end. A entrada é um campo de FTC em que o robô navega sozinho (clique ou toque para mudar a rota); as seções seguem o formato de ficha técnica: trabalho, projetos, robótica e contato.

No ar: https://portfolio-fernando-iota.vercel.app

## Stack

- React 19 + TypeScript + Vite 7
- Tailwind CSS 3 (tokens `paper`, `ink`, `ink-soft`, `signal`, `signal-text`)
- GSAP (ScrollTrigger, SplitText) e Lenis para animação e rolagem
- Three.js só na seção de robótica, carregado sob demanda
- Fontes Archivo e JetBrains Mono servidas pelo próprio site (Fontsource)
- Vitest para a lógica pura (`src/lib`)

## Rodar

```bash
npm install
npm run dev      # desenvolvimento
npm test         # testes da navegação do robô e da palavra secreta
npm run build    # build de produção em dist/
```

## Onde mexer

- Textos, números e links: `src/content.ts`
- Navegação do robô: `src/lib/robot.ts` (controle proporcional de rumo e velocidade)
- Desenho do campo e do robô: `src/components/Field/`
- Design e plano: `docs/superpowers/`

## Trocar o robô 3D

1. Exporte o CAD em FBX e converta para `.glb` com Draco (o script usado está descrito no plano em `docs/superpowers/plans/`).
2. Coloque o modelo em `public/models/robot.glb` e a silhueta vista de cima em `public/robot-top.png`.
3. Preencha `robotModelUrl` e `spriteUrl` em `src/content.ts`.

O decodificador Draco fica em `public/draco/` (copiado de `three/examples/jsm/libs/draco/gltf`).

## Surpresa

Digite `rawr` em qualquer lugar da página.
