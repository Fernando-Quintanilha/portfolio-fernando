# Redesign do portfólio: identidade própria

Data: 2026-11-16 · Branch: `redesign-identidade`

## Intenção

O site atual (React + Vite + Tailwind) tem cara de site gerado por IA: fundo slate, mancha verde desfocada, selo "Disponível" piscando, título em degradê verde→ciano, botões em pílula, cards iguais e números genéricos ("aumentou conversão em 40%", "10k+ transações", "5 estrelas"). Ele também vende serviço ("Solicitar orçamento", Serviços, Depoimentos).

O objetivo agora é **conseguir uma vaga de desenvolvedor back-end ou full-stack júnior** (remota ou em Goiânia). O público é **recrutador e tech lead**. O site precisa:
1. ter um símbolo visual que seja só do Fernando, como os sites de referência (João Victor Quintanilha, p5aholic, itssharl.ee, ian.dunkerley.dev);
2. mostrar com clareza e honestidade o que ele colocou em produção.

## Decisões tomadas com o usuário

- **Público:** recrutadores (vaga), não clientes de freelance.
- **Direção:** conceito **A, "Rota autônoma"** na entrada, com a **organização do C, "Ficha técnica"**, nas seções de baixo.
- **Símbolo:** o robô da FTC navegando sozinho num campo, deixando o rastro da rota, com x / y / θ ao vivo. Quando o usuário mandar o modelo 3D do robô, ele vira a silhueta vista de cima na entrada e um modelo 3D na seção de robótica.
- **Dinossauro:** surpresa escondida, não segunda identidade. Desenho próprio; nada do ARK nem do dinossauro do Chrome.
- **Estrutura aprovada:** 00 entrada · 01 trabalho · 02 projetos · 03 robótica · 04 contato.
- **Remover:** "Solicitar orçamento", Serviços, Depoimentos, selo "Disponível" e números que não dá para sustentar numa entrevista.
- **Manter** a página `/links` com o visual novo.

## Abordagens consideradas

| | Conceito | Prós | Contras | Resultado |
|---|---|---|---|---|
| A | Rota autônoma (FTC), fundo claro de papel quadriculado, laranja de sinalização | símbolo pessoal e forte; bem diferente do site do irmão (escuro, verde-limão, terminal) | exige canvas e animação bem feitos | **escolhido para a entrada** |
| B | Do banco à tela (SQL vira linhas que chegam na interface), escuro e âmbar | conversa com o trabalho de ERP | escuro + mono fica perto demais do site do irmão | descartado |
| C | Ficha técnica suíça com números reais | o mais rápido para recrutador ler | sozinho, fica sem um símbolo pessoal | **usado na organização das seções** |

## Metas, não-metas e anti-metas

**Metas**
- O recrutador entende em 10 segundos: quem é, o que faz (back-end, ERP, banco, integrações) e como falar com ele.
- Identidade própria e coerente: um símbolo, duas fontes, uma cor de destaque.
- Mobile perfeito (muito recrutador abre pelo LinkedIn no celular).
- Lighthouse mobile ≥ 90 em performance e acessibilidade.

**Não-metas (por enquanto)**
- Versão em inglês, blog, CMS, modo escuro.

**Anti-metas (se acontecer, falhou mesmo funcionando)**
- Degradês, brilho/glow, blur decorativo, pílulas coloridas, emoji, fileira de ícones genéricos.
- Qualquer número inventado ou inflado.
- Parecer com o site do João (fundo preto, verde-limão, cara de terminal).
- Entrada pesada: o 3D não pode atrasar o primeiro carregamento.
- Mostrar dado real da TH (cliente, valor, tela com informação interna).

## Restrições

- Continua em React 19 + Vite 7 + TypeScript + Tailwind 3 (o que já existe). Deploy na Vercel (`portfolio-fernando-iota.vercel.app`).
- Bibliotecas novas: `gsap` + `@gsap/react` (animação e ScrollTrigger; hoje é gratuita, plugins inclusos), `lenis` (rolagem suave), `three` (só o robô 3D, carregado sob demanda), `@fontsource/archivo` e `@fontsource/jetbrains-mono` (fontes servidas pelo próprio site).
- Respeitar `prefers-reduced-motion`: sem Lenis, sem animação contínua, rota desenhada parada.

## Identidade visual

**Cores (tokens no Tailwind)**
- `paper` `#ECE9E2`: fundo
- `ink` `#151515`: texto e traços
- `ink-soft` `#5C5953`: texto secundário
- `signal` `#FF4F1A`: destaque em gráfico e elementos grandes
- `signal-text` `#B83A10`: laranja para texto pequeno (contraste AA sobre o papel)
- linhas do campo: `ink` a 8%

**Tipografia**
- Archivo 800 nos títulos grandes (entrelinha justa, tracking negativo); Archivo 400/500 no texto corrido.
- JetBrains Mono 400/500 em rótulos, números de seção, dados e x/y/θ.

**Linguagem gráfica**
- Grade de campo (6×6 placas, como o campo da FTC, com subgrade fina), cruz de mira, traço tracejado de rota, números de seção `01`–`04`, filetes de 1 a 2 px. Cantos retos.

## As partes

### Barra de navegação
Fixa, fina, fundo papel. À esquerda `FQ/`. No meio, em mono, `01 trabalho · 02 projetos · 03 robótica · 04 contato`. À direita, "currículo ↗". No mobile, menu simples em tela cheia.

### 00 — Entrada (campo + robô)
- Canvas 2D ocupando a primeira tela, com o campo quadriculado.
- O robô percorre uma sequência de pontos (laço), com controle simples: rumo por proporcional no ângulo, velocidade proporcional à distância. Deixa rastro tracejado em `signal`.
- Clique ou toque no campo define um novo destino (cruz de mira). Depois de chegar, ele volta ao laço.
- Leitura ao vivo no canto: `x 1.42  y 0.87  θ 34°` (unidades do campo).
- Texto: nome em Archivo 800 grande ("Fernando / Quintanilha"), uma linha em mono ("Desenvolvedor back-end. Coloco sistemas em produção, do banco Oracle à tela do vendedor.") e links: currículo, GitHub, LinkedIn, e-mail.
- Desempenho: pausa quando sai da tela (IntersectionObserver) e quando a aba fica oculta; respeita devicePixelRatio; se o movimento estiver reduzido, desenha a rota parada.
- Robô: desenho SVG provisório visto de cima (chassi + 4 rodas mecanum + seta de frente). Quando o modelo chegar, troca pela silhueta real.

### 01 — Trabalho (ficha da TH)
- Cabeçalho de ficha: "TH Distribuidora — Desenvolvedor e TI · jan/2026 – atual · Goiânia".
- Grade de números reais (contador animado ao entrar na tela):
  - 1.431 custos de reposição corrigidos após um incidente de marketplace
  - PostgreSQL 10 → 17, zero divergência na conferência
  - ~8,6 mil títulos a receber no painel gerencial
  - 4 integrações bancárias (CNAB 240 Safra, Sicoob, Santander, Sicredi)
  - 3 servidores em nuvem (Linux, Windows Server, Oracle)
- Lista do que construiu, em linhas com filete: painel gerencial integrado ao Sankhya (OAuth, serverless), painel do vendedor (PWA, PBKDF2, HMAC, CSP), força de vendas próprio, painéis de TV, catálogo digital de ~4 mil itens. Sem prints de telas internas com dados.
- Fonte do conteúdo: `C:\Cerebro\Pessoal\LinkedIn - perfil.md` (texto aprovado pelo usuário).

### 02 — Projetos
Lista em linhas numeradas (não cards). Cada linha: nº, nome, uma frase do problema e do que fez, stack em mono, links. No desktop, a imagem aparece ao passar o mouse; no mobile, fica dentro da linha.
1. **TimeShape**: SaaS de agendamento em produção (página pública de reservas, Google Calendar, assinatura no Mercado Pago). C# .NET, React, PostgreSQL, Docker; constraint de exclusão contra reserva sobreposta, outbox/inbox, idempotência, CI. Link: `https://app.timeshape.online`.
2. **HoleriteSign**: assinatura de holerite com selfie e envio por WhatsApp. .NET 8, React, PostgreSQL, Redis, MinIO, Docker. Link: repositório `DocSign-V1`. Imagem: `hsSign.png`.
3. **Fortuna.io**: PWA de controle de investimentos com modo privacidade. Link: `https://fortuna-io.vercel.app`. Imagem: `dashfortune.png`.
4. **Catálogo StakeHolder**: planilha → vitrine web com pedido pelo WhatsApp (Python/Pandas + React). Link: `https://catalogo-stake-holder.vercel.app`. Imagem: `catalogoTh.png`.

Saem "Sistemas de Preços" e "Industrial Design Monitor" (link duplicado, imagem errada, inacabados). Saem também todas as métricas sem fonte.

### 03 — Robótica
- Modelo 3D do robô (Three.js, carregado só quando a seção se aproxima), girando conforme a rolagem. Até o modelo chegar: foto `fernandoRobo.jpg` com moldura técnica (cantos de mira, legenda em mono).
- Texto curto: começou aos 12 anos na FIRST e programou a navegação autônoma em Java (odometria, PID, IMU, AprilTags/OpenCV).
- Prêmios em lista de ficha:
  - 2025: Prêmio Nacional de Excelência em Engenharia e Documentação (Torneio Nacional FTC)
  - 2025: 1º lugar geral, Inspire (etapa regional FTC)
  - 2024: Prêmio Nacional de Excelência em Software e Controle Autônomo (Torneio Nacional FTC)
  - 2023: palestrante na Campus Party Goiás
  - 2026: juiz voluntário da seletiva de Goiás da FTC; mentor
- Atlas Tech Education: cofundador e instrutor, 2023–2026.

### 04 — Contato (com o "sobre")
- Duas ou três frases de sobre: Engenharia de Software na UniAlfa; trabalha na TH; mais uma linha leve: "Antes de programar por profissão, vendi dinossauros no ARK." (sem logo nem arte do jogo).
- Contatos grandes: e-mail (`mailto` corrigido), LinkedIn (`/in/fernando-quintanilha`), GitHub, WhatsApp como secundário, currículo.
- Rodapé em mono: ano, "feito à mão em React" e a dica escondida.

### Surpresa: o dinossauro
- Digitar `rawr` em qualquer lugar (ou tocar 5 vezes no `FQ/` no celular) faz um dinossauro desenhado em linha, no traço do site, atravessar o campo da entrada. O robô "desvia" dele.
- A página 404 tem o mesmo dinossauro e "essa rota não existe".
- O dinossauro é desenhado do zero em SVG.

### Página /links
Mesmo papel e fontes: nome, uma linha e uma lista de links em filetes (portfólio, LinkedIn, GitHub, e-mail, WhatsApp). A foto quebrada (`github.com/fernandoquintanilha.png`) é corrigida ou removida.

### Animação e rolagem
- Lenis para a rolagem suave; GSAP ScrollTrigger para revelar seções (título com SplitText por linha, filetes que se desenham, contadores).
- Movimento curto e com propósito; nada piscando em laço além do robô.

### Limpezas junto
- `index.html`: `lang="pt-BR"`, título "Fernando Quintanilha — desenvolvedor back-end", descrição, Open Graph com imagem, favicon próprio (o `FQ/` ou o robô).
- Apagar o `App.css` do template, `react.svg`, `vite.svg` e os componentes que saem (Services, Testimonials, CTA).
- Unificar a URL do LinkedIn; corrigir o `mailto`.
- README do repositório descrevendo o projeto (substituir o texto do template Vite).

## O que fica para quem implementa
- Ajuste fino de tamanhos, espaçamentos e da curva das animações.
- Forma exata do desenho provisório do robô e do dinossauro, dentro da linguagem gráfica acima.
- Estrutura de componentes e hooks (por exemplo `useReducedMotion`, `FieldCanvas`, `Section`).

## Decisões minhas (para o usuário conferir)
- Tema claro único (papel); sem modo escuro por enquanto, porque o claro faz parte da identidade.
- Só português nesta versão.
- Fontes Archivo + JetBrains Mono.
- WhatsApp continua, mas como contato secundário.
- Enquanto não houver PDF do currículo em `public/`, o botão "currículo" aponta para o LinkedIn.
