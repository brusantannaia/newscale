# 📁 Propostas Comerciais — NewScale Consulting

## ⚠️ IMPORTANTE: Proteção contra indexação

Todos os arquivos HTML desta pasta estão **PROTEGIDOS** contra indexação do Google através de **3 camadas de segurança**:

---

### 🛡️ Camada 1: Meta Tags (no HTML)

Cada proposta HTML deve conter no `<head>`:

```html
<meta name="robots" content="noindex, nofollow">
<meta name="googlebot" content="noindex, nofollow, noarchive">
<meta name="bingbot" content="noindex, nofollow">
```

---

### 🛡️ Camada 2: robots.txt

O arquivo `/robots.txt` na raiz bloqueia esta pasta:

```
Disallow: /propostas/
```

---

### 🛡️ Camada 3: Netlify Headers

O arquivo `netlify.toml` envia headers HTTP para bloquear indexação:

```toml
[[headers]]
  for = "/propostas/*"
  [headers.values]
    X-Robots-Tag = "noindex, nofollow"
```

---

## 📋 Como usar o template

1. Copie o arquivo `TEMPLATE-PROPOSTA.html`
2. Renomeie para o formato: `proposta-[CLIENTE]-[DATA].html`
   - Exemplo: `proposta-empresa-abc-260414.html`
3. Preencha os campos marcados com `[COLCHETES]`
4. **Nunca remova** as meta tags de bloqueio do `<head>`

---

## 📂 Propostas existentes

Coloque todas as propostas comerciais nesta pasta para mantê-las organizadas e protegidas.

---

*NewScale Consulting — Implementação de IA para Empresas*
