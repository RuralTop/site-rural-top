# Rural Top — site institucional

Site institucional da **Rural Top Comercial Agrícola Ltda.**, empresa de
irrigação agrícola em Brasília/DF: projeto, fornecimento e implantação de
sistemas de gotejamento, aspersão, pivô central, bombeamento, automação e
filtragem.

Este projeto reconstrói em código de produção o protótipo visual criado em
`Home de irrigação com 3D/Rural Top.dc.html` (um arquivo de design da
ferramenta Claude Design Canvas — não é executável em produção). Todo o
conteúdo, textos, imagens e comportamento interativo do protótipo foram
preservados.

## Tecnologias

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** para estilos
- Fontes **Archivo** e **IBM Plex Mono** carregadas via `next/font` (self-hosted, sem chamada externa em runtime)
- `next/image` para otimização automática de imagens
- Sem backend: o formulário de contato monta uma mensagem e usa `wa.me` (WhatsApp) como canal de envio, replicando o comportamento do protótipo original

Por que essa stack: o site é uma única página de marketing com conteúdo
estático e pequenas interações client-side (galeria automática, formulário,
menu mobile, etc.). Next.js + TypeScript + Tailwind dá tipagem, performance
(imagens otimizadas, fontes self-hosted, JS mínimo) e um caminho de deploy
trivial (Vercel), sem a complexidade de um backend que este site não precisa.

## Estrutura do projeto

```
src/
  app/
    layout.tsx        # shell HTML, fontes, metadata/SEO padrão
    page.tsx           # monta a página a partir dos componentes de seção
    sitemap.ts          # /sitemap.xml
    robots.ts            # /robots.txt
    favicon.ico, apple-icon.png   # ícones (convenção de arquivo do Next.js)
    globals.css
  components/           # um componente por seção da página (Header, Hero, Process, ...)
  data/
    content.ts           # TODO o conteúdo textual/dados do site (textos, fotos, depoimentos, marcas)
public/
  images/                # imagens do site (copiadas do protótipo)
  android-chrome-*.png, site.webmanifest
Home de irrigação com 3D/   # protótipo original (referência de design), não faz parte do build
```

Todo o conteúdo (textos, telefone, WhatsApp, endereço, depoimentos, marcas
representadas) fica centralizado em `src/data/content.ts` — para atualizar
qualquer texto do site, esse é o arquivo a editar.

## Rodando localmente

Pré-requisitos: Node.js 20+ e npm.

```bash
npm install
cp .env.example .env.local   # ajuste as variáveis se necessário
npm run dev
```

Abra http://localhost:3000.

### ⚠️ Nota importante para quem desenvolve dentro do Dropbox

Esta pasta do projeto fica sincronizada pelo Dropbox. O Dropbox tenta
sincronizar `node_modules/` e `.next/` em tempo real enquanto o Next.js
escreve milhares de arquivos pequenos durante o build — isso já causou
corrupção de build (bundles JS truncados) durante o desenvolvimento deste
projeto. Para evitar o problema, `node_modules/` e `.next/` foram marcados
como **ignorados pelo Dropbox** (atributo `com.dropbox.ignored`) nesta
máquina. Se você clonar o projeto em outro computador com Dropbox, ou se o
Dropbox voltar a sincronizar essas pastas, rode no PowerShell:

```powershell
Set-Content -Path "node_modules" -Stream com.dropbox.ignored -Value 1
Set-Content -Path ".next" -Stream com.dropbox.ignored -Value 1
```

(Ou, melhor ainda para o dia a dia: mantenha o clone de trabalho fora de uma
pasta sincronizada pelo Dropbox, e use o Dropbox só para armazenar o
protótipo/assets originais. O GitHub é a fonte de verdade do código.)

## Variáveis de ambiente

Veja `.env.example`. Nenhuma é secreta — servem para não precisar editar
código ao trocar o domínio de produção ou o número de WhatsApp:

| Variável | Uso |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL canônica usada em SEO (Open Graph, sitemap, robots) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp comercial (DDI+DDD+número, só dígitos) |

## Build de produção

```bash
npm run build
npm run start   # serve o build em http://localhost:3000
```

Outros scripts: `npm run lint`, `npm run typecheck`.

## Deploy

Recomendado: **Vercel** (mesma empresa do Next.js, zero-config, HTTPS e CDN
automáticos, deploy automático a cada push no GitHub, preview por Pull
Request). Passos:

1. Importar o repositório GitHub em https://vercel.com/new
2. Configurar as variáveis de ambiente (`NEXT_PUBLIC_SITE_URL`,
   `NEXT_PUBLIC_WHATSAPP_NUMBER`) no painel do projeto na Vercel
3. Deploy automático a cada push na branch principal

Alternativas equivalentes: Netlify, Cloudflare Pages (qualquer host com
suporte nativo a Next.js).

## SEO e acessibilidade

- Metadata completo (title/description/Open Graph/Twitter Card) em `src/app/layout.tsx`
- Dados estruturados (`schema.org` `HomeAndConstructionBusiness`) em `src/app/page.tsx`
- `sitemap.xml` e `robots.txt` gerados automaticamente
- Todas as imagens de conteúdo têm `alt` descritivo; imagens puramente decorativas usam `alt=""`
- HTML semântico (`header`, `main`, `section`, `footer`), labels associados a todos os campos de formulário, navegação por teclado funcional
- Respeita `prefers-reduced-motion` (desliga animações para quem configurou isso no sistema)

## Manutenção futura

- **Atualizar textos/fotos/depoimentos/marcas**: editar `src/data/content.ts`
- **Novas imagens**: colocar em `public/images/` e referenciar com `next/image`
- **Nova seção de página**: criar um componente em `src/components/` e importar em `src/app/page.tsx`
- **Novas páginas**: criar uma pasta em `src/app/<rota>/page.tsx` (App Router)
