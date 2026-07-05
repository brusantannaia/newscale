# Mapa de Redesign — NewScale "Premium Dark"

> Objetivo: aplicar a MESMA lógica e identidade do novo site da Bruna (A Virada IA — Anton + Hanken Grotesk, títulos enormes, placeholders de foto `.ph`, marquee, seções alternadas, reveal no scroll), porém **mais premium e mais escura**, em todas as páginas de newscale.tech.
> Princípios: **menos texto onde der** (sem cortar resultado/números), **fontes bold e textos maiores**, **mais imagens, fotos e mockups deslumbrantes**, layout mais moderno e respirado.

Repo: `brusantannaia/newscale` (deploy Netlify) · Site: newscale.tech

---

## 0. North Star (o conceito)

A Virada IA = **claro/quente + verde de acento** (pessoal, B2C).
NewScale = **escuro dominante + acento terracota/dourado** (premium, B2B). A transição claro→escuro é proposital: "subiu de nível".

Hoje a NewScale já é escura, mas usa **Cormorant Garamond + DM Sans** (elegante-serifado, "cara de Claude genérico") e é **muito densa de texto**, com cards de ícone e poucos respiros. O redesign mantém a paleta escura da marca, troca para o **sistema bold da Virada IA**, **dobra o tamanho dos títulos**, **corta texto**, e **insere fotos/mockups** onde hoje só tem texto.

---

## 1. Sistema visual global (Virada IA → NewScale Premium Dark)

### 1.1 Tipografia (a maior mudança)
- **Display:** `Anton` (MAIÚSCULA, pesada) — títulos `clamp(2.6rem … 6.2rem)`, line-height ~0.9. É o "bold" que a Bruna quer.
- **Corpo/UI:** `Hanken Grotesk` (300–800) — substitui DM Sans.
- **Aposenta** Cormorant Garamond. (Decisão a confirmar — ver fim do doc; alternativa é manter o serif só como acento itálico premium em 1–2 palavras.)
- Hierarquia: H1 Anton `clamp(3.4rem,9vw,6.2rem)`; H2 Anton `clamp(2.2rem,6vw,3.6rem)`; eyebrow/kick Hanken 700 0.72rem uppercase letter-spacing .16em cor terracota; corpo Hanken 300–400 1.0–1.15rem.

### 1.2 Paleta (escurecer para premium)
Hoje o fundo é `--ink #14373C`. Para "mais premium e escuro", criar camadas mais profundas:
```css
--bg:#0C2427;        /* fundo base, mais escuro que o ink atual */
--bg-2:#0E2A2E;      /* faixa alternada */
--ink:#14373C;       /* card / superfície elevada */
--ink-2:#1A4449;
--green:#435D51;      /* sage, detalhe */
--terra:#B06E4A; --tl:#C4835E; --terra-d:#985A3B;  /* acento/CTA */
--sand:#A38362;       /* fios dourados premium */
--cream:#F4F3EF;      /* texto sobre escuro */
--muted:rgba(244,243,239,.62);
--line:rgba(244,243,239,.10);
```
- **Seções claras pontuais:** 1–2 blocos em bege `#F3EEE3` (ex.: "Para quem é" ou "Educação") para dar respiro e contraste — o oposto da Virada IA, que é clara com pontos escuros.

### 1.3 Componentes (portar da Virada IA)
- **Header sticky** com borda inferior 2px, blur, logo + nav Hanken 600, CTA pill terracota. (NewScale: logo branco sobre escuro.)
- **Marquee** Anton com nomes de clientes/setores (já existe um de integrações — replicar o estilo Anton da Virada).
- **Placeholders `.ph`** (gradiente escuro + ícone de câmera + nome do arquivo) → permitem subir o site "deslumbrante" mesmo antes das fotos chegarem; cada foto real entra trocando 1 arquivo.
- **Cards "frente"** (foto topo + corpo + link "→" com underline terracota), hover translateY.
- **Stats grid** com números Anton gigantes em terracota-light.
- **Reveal on scroll** (`.rv`) + `prefers-reduced-motion`.
- **Sombra "hard":** na Virada (fundo claro) é sombra sólida deslocada. No escuro ela some — **adaptar** para: fio luminoso 1px (`--line`), leve glow terracota no hover, e um traço terracota de 2px no topo do card. Reservar a sombra hard sólida para os blocos claros.

### 1.4 Fotos & mockups (o que falta hoje)
- **Tratamento de foto (marca):** filtro "Cocoa" amarronzado / P&B + overlay `#14373C`/`#B06E4A` 0.4–0.6 — unidade visual premium.
- **Mockups "deslumbrantes":** hoje só há o painel "Copilotos de Marketing" (bom) e ícones SVG. Criar mockups de produto de verdade: tela de WhatsApp do agente conversando, dashboard de KPIs, fluxo n8n estilizado, "antes/depois" (1,5 dia → 10 min). Em vez de cards de ícone, usar **mockups + número**.
- **Grain/noise** overlay (opacity .03) sobre gradientes — já no guia da marca.

---

## 2. Header & Footer (globais — fazer 1x, vale p/ todas as páginas)
- **Header:** migrar nav atual (Metodologia · Agentes · Educação · Cases · Sobre · Blog) para o padrão Virada (Hanken, pill CTA "Diagnóstico gratuito" terracota). Logo branco. Menu mobile full-width com borda.
- **Footer:** Anton no nome "NEWSCALE", links Hanken, contato + sociais. Mais escuro, mais respirado.

---

## 3. Página a página

### 3.1 HOME (`index.html`) — 16 seções hoje, muito densa
Manter a espinha, **enxugar e visualizar**:
| Seção | Ação |
|---|---|
| Hero (4 steps "jornada") | Reconstruir no padrão Virada: H1 Anton gigante ("INTELIGÊNCIA ARTIFICIAL QUE VIRA RESULTADO" / com palavra em terracota), sub curta, 2 CTAs. Manter os 4 passos como **faixa-jornada** enxuta abaixo. Adicionar **foto/mockup** à direita (hero-grid 2 col). |
| Problema (4 cards de texto) | Cortar texto ~40%, manter as 4 dores como chips/itens grandes. |
| Metodologia resumo (6 passos) | Virar **timeline horizontal** com números Anton; menos descrição. |
| Agentes resumo (6 cards) | Manter grid, trocar para cards "frente" com **espaço de imagem/mockup** no topo. |
| Copilotos de Marketing (mockup) | **Manter** — é o melhor mockup do site. Só ajustar tipografia. |
| Cases (tabs RH/Saúde/Varejo) | Manter tabs, **dar protagonismo ao número** (Anton gigante) e enxugar Problema/Solução. |
| Por que NewScale (4 blocos) | Enxugar para 4 frases fortes. |
| Para quem é (8 cards) | **Bloco claro (bege)** p/ respiro; reduzir para títulos + 1 linha. |
| Custo de não automatizar (4) | Manter (boa dor) — encurtar textos. |
| Como funciona (timeline 4) | Pode fundir visualmente com "Metodologia" p/ não repetir. |
| Fundadores | **Fotos grandes tratadas** (Cocoa), nome Anton, quote em destaque. |
| Integrações (marquee logos) | Manter; alinhar estilo ao marquee Anton. |
| Blog preview | Cards "frente" com espaço de imagem de capa. |
| CTA final | Anton gigante, fundo escuro premium + glow. |
- **Resultado:** mesma informação, ~30–40% menos texto, +6 a +8 espaços de imagem/mockup, títulos 2–3× maiores.

### 3.2 METODOLOGIA (`metodologia.html`)
- H1 Anton. As **6 etapas** viram cards numerados grandes (número Anton em terracota) com ícone + 1 frase. Hoje tem muito "letra miúda" — cortar.
- Adicionar **diagrama/mockup do processo** (linha do tempo 4–12 semanas visual) e 1 foto de bastidor (reunião/diagnóstico) tratada.
- Seção "Na prática, o que é diferente" → comparativo **NewScale vs. consultoria comum** (tabela visual 2 colunas).

### 3.3 AGENTES (`agentes.html`)
- H1 Anton "AGENTES DE IA QUE DESENVOLVEMOS".
- Cada agente (Vendas/SAC/CRM/Dados/RH/Saúde/Financeiro/Franquias) vira **card com mockup** (ex.: print de conversa de WhatsApp do agente) em vez de só ícone. **Menos texto**, mais "antes/depois" e tags.
- Marquee de integrações mantido. CTA "Qual agente sua empresa precisa?" reforçado.

### 3.4 CASES (`cases.html`) — não cortar resultado!
- H1 Anton. Cada case (COLO, RH, Casa Tacto, Casa Kahla, Belcenter) = **número-herói Anton gigante** + Problema/Solução em 1 frase cada + grid de métricas + stack.
- Adicionar **logo/foto do cliente** (ou placeholder) e, onde possível, mockup do resultado (dashboard, conversa).
- **Preservar todas as métricas** (+42%, R$0,09, +34%, etc.) — só reduzir prosa em volta.

### 3.5 SOBRE (`sobre.html`)
- H1 Anton. **Fotos grandes** dos fundadores tratadas (Cocoa). Quotes em destaque tipográfico.
- "3 pilares" e "formato híbrido" enxutos. Faixa de logos (Warner, Natura, SulAmérica, Whirlpool, Potenc.IA) estilo marquee.
- Espaço para **foto do time/bastidores**.

### 3.6 EDUCAÇÃO (`educacao/index.html`)
- Já está mais perto do estilo bold (H1 "A IA que sua equipe vai usar na segunda de manhã"). **Repaginar para o sistema final** (Anton + Hanken, escuro premium) e ligar visualmente com a Virada IA (ponte pessoa física ↔ empresa).
- Inserir **fotos de palco/imersão** (Stoller, Ismart, Sorridents — já existem em `/Fotos`, precisam otimizar). Pode virar bloco claro/quente para conversar com o site da Bruna.

### 3.7 BLOG (`blog/index.html` + artigos)
- H1 Anton. Cards de artigo com **capa/ilustração** (hoje sem imagem). Categoria como tag terracota. Menos meta, mais título.

### 3.8 CONTATO (`contato.html`)
- H1 Anton "FALE COM A NEWSCALE". Layout 2 colunas: copy curta + canais (WhatsApp/email) com destaque. Fundo premium + glow. Opcional: foto/mapa SP.

### 3.9 TRABALHE CONOSCO (`trabalhe-conosco.html`)
- H1 Anton. Vagas como cards "frente". Seção afiliados enxuta. Mesmo header/footer/CTA.

> Obs.: `home-teste.html` (928 linhas) parece um rascunho de home alternativa — vale revisar e decidir se canibalizamos partes dele ou descartamos antes de começar.

---

## 4. Inventário de imagens/mockups a produzir
**Fotos (tratamento Cocoa):** fundadores (Bruno, Bruna), time/bastidores, palco/imersões (Stoller, Ismart, Sorridents — em `Fotos/`, otimizar), reunião de diagnóstico, logos de clientes.
**Mockups (deslumbrantes, vetor/figma-like):**
1. Conversa de WhatsApp do agente (vendas / SAC / RH).
2. Dashboard de KPIs em tempo real.
3. Fluxo n8n estilizado (orquestração de agentes).
4. "Antes × Depois" / "1,5 dia → 10 min".
5. Painel Copilotos de Marketing (reaproveitar o atual).
6. Capas de artigos do blog.
> Enquanto não chegam, os placeholders `.ph` deixam o site pronto e elegante; troca = 1 arquivo por foto.

---

## 5. Ordem de execução sugerida
1. **Sistema visual global** (CSS base: fontes Anton+Hanken, paleta premium dark, componentes `.ph`/cards/marquee/reveal) + **Header & Footer** — base de tudo.
2. **HOME** (maior impacto, valida o estilo).
3. **Cases** + **Agentes** (onde mockups/números brilham).
4. **Metodologia** + **Sobre**.
5. **Educação** (ponte com a Virada IA) + **Blog** + **Contato** + **Trabalhe Conosco**.
6. Trocar placeholders por fotos/mockups reais; revisar mobile; publicar.
> Depois: atualizar a skill `newscale-brand` (visual-identity.md) para o novo sistema bold, senão os próximos materiais voltam pro Cormorant.
