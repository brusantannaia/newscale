# ESTRATÉGIA DE SEO — NEWSCALE CONSULTING

**Última atualização:** 08/04/2026  
**Responsável:** Bruno Varella  
**Agente:** SEO & LLM Optimization

---

## 📐 ARQUITETURA DE URLs

### 🌐 Site Institucional (Index/Follow)

**Objetivo:** Ranqueamento orgânico e autoridade de marca

```
https://newscale.tech/                → Home (IMPLEMENTADO ✅)
https://newscale.tech/metodologia     → Como trabalhamos (A IMPLEMENTAR)
https://newscale.tech/agentes         → Portfólio de agentes (A IMPLEMENTAR)
https://newscale.tech/cases           → Cases de sucesso (A IMPLEMENTAR)
https://newscale.tech/sobre           → Quem somos (A IMPLEMENTAR)
https://newscale.tech/contato         → Formulário de contato (A IMPLEMENTAR)
https://newscale.tech/blog            → Blog index (A IMPLEMENTAR)
https://newscale.tech/blog/[categoria] → Categorias do blog
https://newscale.tech/blog/[slug]     → Artigos individuais
```

**Meta tags padrão para todas as páginas do site:**
```html
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
<link rel="canonical" href="https://newscale.tech/[url-da-pagina]">
```

---

### 🎯 Landing Pages Segmentadas (NoIndex/Follow)

**Objetivo:** Conversão de tráfego pago, sem competir com site institucional

```
https://newscale.tech/lp/saude        → Setor Saúde (A CRIAR)
https://newscale.tech/lp/rh           → RH & Recrutamento (A CRIAR)
https://newscale.tech/lp/varejo       → Varejo & E-commerce (A CRIAR)
https://newscale.tech/lp/franquias    → Franquias (A CRIAR)
https://newscale.tech/lp/eventos      → Eventos (A CRIAR)
https://newscale.tech/lp/servicos     → Serviços gerais (A CRIAR)
```

**Meta tags padrão para todas as LPs:**
```html
<meta name="robots" content="noindex, follow">
<link rel="canonical" href="https://newscale.tech/lp/[segmento]">
```

**Por quê NoIndex nas LPs?**
1. ✅ Evita canibalização de keywords com páginas institucionais
2. ✅ LPs focam 100% em conversão, não em ranqueamento
3. ✅ Google prioriza páginas institucionais para buscas orgânicas
4. ✅ Você controla exatamente qual URL aparece para cada query
5. ✅ Permite testar variações de copy sem afetar SEO

---

## 🔍 TERMOS-ALVO POR PÁGINA

### Home (/)
**Tier 1 (Alta Prioridade):**
- consultoria de IA para empresas
- implementação de IA empresarial
- agentes de IA para empresas
- automação com IA

**Tier 2 (Média Prioridade):**
- consultoria inteligência artificial Brasil
- IA para empresas São Paulo

### /agentes
**Foco:**
- agentes autônomos IA
- chatbot inteligente para empresa
- agente de vendas WhatsApp IA
- agente de atendimento IA
- copiloto de marketing IA

### /cases
**Foco:**
- cases de IA em empresas
- resultados IA empresarial
- ROI de implementação de IA
- cases automação processos

### /metodologia
**Foco:**
- como implementar IA na empresa
- consultoria sistêmica IA
- roadmap implementação IA

### /blog (Quando criado)
**Long-tail e informacional:**
- como escolher consultoria de IA
- quanto custa implementar IA empresa
- agentes de IA vs chatbots diferença
- automação processos com IA exemplos
- IA para [setor específico]

---

## 🏗️ SCHEMA MARKUP IMPLEMENTADO

### ✅ Home (index.html) — IMPLEMENTADO

**1. Organization/ProfessionalService**
- Nome, descrição, contato
- Founders (Bruno + Bruna)
- Geolocalização (São Paulo)
- ServiceTypes completo
- Offer Catalog (Diagnóstico + Implementação)

**2. FAQPage**
- 5 perguntas frequentes com respostas
- Foco em objeções comuns e diferenciação

**3. BreadcrumbList**
- Navegação estrutural para Google

### 📋 A Implementar nas Próximas Páginas

**Cases (/cases):**
```json
{
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Article",
      "headline": "Case COLO Saúde: +26% capacidade com IA",
      "description": "..."
    }
  ]
}
```

**Agentes (/agentes):**
```json
{
  "@type": "Service",
  "name": "Agente de Vendas WhatsApp IA",
  "description": "...",
  "provider": {
    "@type": "Organization",
    "name": "NewScale Consulting"
  }
}
```

**Blog Articles:**
```json
{
  "@type": "Article",
  "headline": "...",
  "author": {
    "@type": "Person",
    "name": "Bruno Varella"
  },
  "datePublished": "...",
  "dateModified": "..."
}
```

---

## 🔗 ESTRATÉGIA DE LINKING INTERNO

### Site Institucional ↔ Site Institucional
**✅ FAZER:**
- Menu principal com links para todas as páginas
- Footer com links estruturais
- Links contextuais dentro de artigos
- Breadcrumbs em todas as páginas internas
- Botões CTA levando para /contato ou diagnóstico

**Objetivo:** Distribuir Page Authority, melhorar crawlability

### LPs Segmentadas → Site Institucional
**✅ FAZER:**
- Link discreto no footer: "Sobre a NewScale" → /sobre
- Link nos cases: "Ver mais cases" → /cases
- Manter follow nos links

**❌ NÃO FAZER:**
- Não colocar LPs no menu principal do site
- Não linkar LPs entre si

### Site Institucional → LPs Segmentadas
**❌ NÃO FAZER:**
- Nunca linkar do site institucional para LPs
- LPs são pontas de campanha, não fluxo orgânico

---

## 📊 TRACKING & ANALYTICS (Para quando GA4 estiver instalado)

### Custom Dimensions Recomendadas

**page_type:**
- `institutional` → Páginas do site
- `landing_page` → LPs segmentadas
- `blog` → Artigos do blog

**segment:** (Apenas para LPs)
- `saude`
- `rh`
- `varejo`
- `franquias`
- `eventos`
- `servicos`

**traffic_source:**
- `organic` → Tráfego orgânico
- `paid_google` → Google Ads
- `paid_meta` → Facebook/Instagram Ads
- `direct` → Direto
- `referral` → Referências

### Eventos de Conversão

**diagnostico_agendado** (Primary Goal)
- Quando: Click no WhatsApp ou submit de form
- Value: R$ [definir valor de lead]

**whatsapp_click**
- Quando: Click em qualquer botão WhatsApp
- Categoria: engagement

**form_start**
- Quando: Usuário começa a preencher form
- Categoria: engagement

**scroll_depth**
- Quando: 25%, 50%, 75%, 100% da página
- Categoria: engagement

---

## 🎨 COPY & MESSAGING POR TIPO DE PÁGINA

### Site Institucional
**Tom:** Profissional, educativo, baseado em dados  
**Foco:** Autoridade de marca e educação do mercado  
**Cases:** Todos os segmentos misturados  
**CTA:** Genérico — "Agende diagnóstico gratuito"

**Exemplo H1:**
- Home: "Transforme IA em ganho real de produtividade, receita e eficiência"
- Agentes: "Agentes de IA Hiper-Personalizados para Cada Etapa do Seu Negócio"
- Cases: "Resultados Reais de Empresas que Implementaram IA com a NewScale"

### LPs Segmentadas
**Tom:** Direto, orientado a resultados do segmento  
**Foco:** Conversão imediata  
**Cases:** SOMENTE do segmento-alvo  
**CTA:** Específico — "Diagnóstico gratuito para [clínicas/varejo/franquias]"

**Exemplo H1 (/lp/saude):**
- "Reduza 30+ Minutos por Atendimento com Agentes de IA para Saúde"
- "IA que Analisa Prontuários e Gera Relatórios Automaticamente"
- "De R$X por Relatório Manual para R$0,09 com IA"

---

## 📝 PLANO DE CONTEÚDO — BLOG (Próximos 6 meses)

### Mês 1-2: Fundação (5-7 artigos)
1. "O que são Agentes de IA e como diferem de Chatbots tradicionais"
2. "ROI de Implementação de IA: Quanto tempo para ter retorno?"
3. "Como escolher uma consultoria de IA para sua empresa"
4. "5 processos que toda empresa pode automatizar com IA hoje"
5. "IA sem equipe técnica: mito ou realidade?"

### Mês 3-4: Segmentação (6-8 artigos)
6. "Guia completo: IA para clínicas e consultórios médicos"
7. "Como agentes de IA transformam recrutamento e seleção"
8. "Automação para varejo: do atendimento à recompra"
9. "IA para franquias: padronização em escala"
10. "Cases: antes e depois da implementação de IA"

### Mês 5-6: Aprofundamento (4-6 artigos)
11. "Integração de IA com ERPs: guia técnico simplificado"
12. "WhatsApp Business API + IA: o futuro do atendimento"
13. "Como medir o sucesso de agentes de IA (KPIs essenciais)"
14. "Erros comuns na implementação de IA e como evitá-los"

**Frequência:** 2-4 artigos/mês  
**Tamanho ideal:** 1.500-2.500 palavras  
**SEO:** Keyword research antes de cada artigo

---

## 🚀 CRONOGRAMA DE IMPLEMENTAÇÃO

### ✅ FASE 1 — CONCLUÍDA (08/04/2026)
- [x] Deletar `/lp-institucional.html` (duplicata)
- [x] Corrigir canonical tags para `https://newscale.tech/`
- [x] Adicionar meta robots `index, follow`
- [x] Implementar Schema markup completo (Organization, FAQPage, BreadcrumbList)
- [x] Melhorar Open Graph e Twitter Cards
- [x] Criar documentação estratégica (este arquivo)

### 📋 FASE 2 — Site Completo (Prazo: TBD)
- [ ] Desenvolver páginas institucionais (/metodologia, /agentes, /cases, /sobre, /contato)
- [ ] Implementar menu de navegação principal
- [ ] Criar footer com links estruturais
- [ ] Adicionar breadcrumbs
- [ ] Schema markup específico por página
- [ ] Otimizar images (alt text, lazy loading)
- [ ] Configurar sitemap.xml
- [ ] Configurar robots.txt

### 📋 FASE 3 — Blog & Conteúdo (Prazo: TBD)
- [ ] Setup do blog (estrutura, template, categorias)
- [ ] Publicar primeiros 5 artigos (fundação)
- [ ] Implementar sistema de categorias
- [ ] Schema markup Article em todos os posts
- [ ] RSS feed
- [ ] Newsletter signup

### 📋 FASE 4 — LPs Segmentadas (Após site completo)
- [ ] Criar estrutura `/lp/[segmento]`
- [ ] Implementar meta `noindex, follow` em todas
- [ ] Desenvolver 6 LPs (saude, rh, varejo, franquias, eventos, servicos)
- [ ] Configurar UTM tracking padrão
- [ ] Integrar pixels FB/Google Ads
- [ ] A/B testing setup

### 📋 FASE 5 — Analytics & Otimização (Contínuo)
- [ ] Configurar Google Analytics 4
- [ ] Configurar Google Search Console
- [ ] Implementar eventos de conversão
- [ ] Dashboard de monitoramento semanal
- [ ] Auditorias mensais de SEO técnico

---

## 🛠️ CHECKLIST DE SEO TÉCNICO (Aplicar em TODAS as páginas)

### Meta Tags Essenciais
- [ ] `<title>` único e descritivo (50-60 caracteres)
- [ ] `<meta name="description">` único (150-160 caracteres)
- [ ] `<link rel="canonical">` correto
- [ ] `<meta name="robots">` apropriado (index/noindex)
- [ ] Open Graph completo (og:title, og:description, og:image, og:url)
- [ ] Twitter Card

### Estrutura HTML
- [ ] Apenas 1 `<h1>` por página
- [ ] Hierarquia lógica H2 → H3 → H4
- [ ] Parágrafos curtos (2-4 linhas)
- [ ] Listas quando aplicável
- [ ] Imagens com `alt` descritivo
- [ ] Links internos contextuais

### Performance
- [ ] Imagens otimizadas (WebP quando possível)
- [ ] Lazy loading em imagens below-fold
- [ ] CSS minificado
- [ ] JavaScript minificado e defer/async
- [ ] Core Web Vitals dentro dos limites:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

### Mobile
- [ ] Viewport meta tag
- [ ] Design responsivo
- [ ] Touch targets adequados (min 48x48px)
- [ ] Texto legível sem zoom

### Schema Markup
- [ ] Organization em todas as páginas
- [ ] BreadcrumbList em páginas internas
- [ ] Tipo específico quando aplicável (Article, Service, FAQPage)
- [ ] Validar em https://schema.org/validator

---

## 📈 KPIs DE SEO (Acompanhamento Semanal)

### Posicionamento
- Posição média termos Tier 1 (target: Top 10)
- Posição média termos Tier 2 (target: Top 20)
- Evolução semanal de posicionamento

### Tráfego
- Sessões orgânicas totais
- Usuários novos via orgânico
- Taxa de rejeição orgânica (target: <60%)
- Páginas/sessão orgânica (target: >2)

### Conversão
- Diagnósticos agendados via orgânico
- Taxa de conversão orgânica (target: >2%)
- WhatsApp clicks via orgânico

### Indexação
- Páginas indexadas total
- Erros de indexação
- Cobertura no Search Console

### Técnico
- Core Web Vitals (LCP, FID, CLS)
- Mobile usability errors
- Sitemap status

### Autoridade
- Backlinks novos/mês
- Domínios de referência
- Domain Authority (Moz) ou Domain Rating (Ahrefs)

---

## 🎯 METAS DE 6 MESES

**Indexação:**
- 25+ páginas indexadas (site + blog)
- Zero erros críticos de indexação

**Posicionamento:**
- 3+ termos Tier 1 no Top 10
- 8+ termos Tier 2 no Top 20

**Tráfego:**
- 500+ sessões orgânicas/mês
- 50+ leads orgânicos/mês

**Conteúdo:**
- 15+ artigos de blog publicados
- 6+ LPs segmentadas ativas

**Autoridade:**
- 20+ backlinks de qualidade
- 10+ menções em respostas de LLMs

---

## 📞 CONTATOS & RECURSOS

**Responsável:** Bruno Varella  
**Email:** [email protected]  
**WhatsApp:** +55 11 97190-1020

**Ferramentas:**
- Google Analytics: (A configurar)
- Google Search Console: (A configurar)
- Agente SEO: Claude Project "SEO & LLM Optimization"

**Repositório GitHub:** https://github.com/brusantannaia/newscale

---

## 📚 REFERÊNCIAS & DOCUMENTAÇÃO

- [Google Search Central](https://developers.google.com/search)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

**Versão:** 1.0  
**Última revisão:** 08/04/2026  
**Próxima revisão:** Semanal (segundas-feiras)
