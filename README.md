# Rural Top — site institucional

Site institucional da **Rural Top Comercial Agrícola Ltda.**, empresa de
irrigação agrícola em Brasília/DF: projeto, fornecimento e implantação de
sistemas de gotejamento, aspersão, pivô central, bombeamento, automação e
filtragem.

**Repositório:** https://github.com/RuralTop/site-rural-top
**Branch principal:** `main`
**Status atual:** código completo, testado e versionado no GitHub. Deploy em produção ainda não foi feito (ver [Deploy](#deploy)).

Este projeto reconstrói em código de produção o protótipo visual que estava em
`Home de irrigação com 3D/Rural Top.dc.html` — um arquivo de design da
ferramenta Claude Design Canvas, que **não é executável em produção** (depende
de um runtime proprietário, `support.js`, só usado dentro do editor visual).
Todo o conteúdo, textos, imagens e comportamento interativo do protótipo foram
preservados; o que mudou foi a implementação, agora em React/Next.js real.

---

## Índice

- [Tecnologias e por quê](#tecnologias-e-por-quê)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Rodando localmente](#rodando-localmente)
- [⚠️ Nota sobre Dropbox](#️-nota-importante-para-quem-desenvolve-dentro-do-dropbox)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Scripts disponíveis](#scripts-disponíveis)
- [Como editar o conteúdo do site](#como-editar-o-conteúdo-do-site)
- [Deploy](#deploy)
- [SEO e acessibilidade](#seo-e-acessibilidade)
- [Testes já realizados](#testes-já-realizados)
- [Troubleshooting](#troubleshooting)
- [Manutenção e próximos passos](#manutenção-e-próximos-passos)

---

## Tecnologias e por quê

| Tecnologia | Papel |
|---|---|
| **Next.js 15** (App Router) | framework React, gera HTML estático/otimizado, roteamento, SEO nativo |
| **React 19** + **TypeScript** | componentes tipados, menos bugs em tempo de execução |
| **Tailwind CSS** | estilos utilitários, sem CSS solto pelo projeto |
| `next/font` | fontes **Archivo** e **IBM Plex Mono** self-hosted (sem chamada externa ao Google Fonts em produção → mais rápido e mais privado) |
| `next/image` | otimização automática de imagens (redimensiona, converte formato, lazy-load) |
| **sem backend** | o formulário de contato monta uma mensagem e abre o WhatsApp (`wa.me`) — não existe servidor, banco de dados ou API própria |

**Por que essa stack:** o site é uma única página de marketing (`/`), com
conteúdo majoritariamente estático e algumas interações no navegador (galeria
automática, formulário, menu mobile, marquee de marcas). Next.js + TypeScript
+ Tailwind entrega performance (imagens otimizadas, fontes self-hosted, JS
mínimo), tipagem (menos erros ao editar depois) e deploy trivial (Vercel),
sem a complexidade de um backend que este site não precisa.

## Estrutura do projeto

```
site rural top/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # shell HTML, fontes, metadata/SEO padrão do site inteiro
│   │   ├── page.tsx          # monta a home a partir dos componentes de seção + JSON-LD
│   │   ├── globals.css       # reset, animações globais, seleção de texto
│   │   ├── sitemap.ts        # gera /sitemap.xml
│   │   ├── robots.ts         # gera /robots.txt
│   │   ├── favicon.ico       # ícone da aba do navegador (gerado a partir da marca)
│   │   └── apple-icon.png    # ícone para iOS "adicionar à tela de início"
│   ├── components/           # um componente por seção visual da página
│   │   ├── Header.tsx        # topo fixo + menu mobile
│   │   ├── Hero.tsx          # seção de abertura
│   │   ├── Process.tsx       # linha do tempo "como trabalhamos" (5 passos)
│   │   ├── FieldGallery.tsx  # galeria de fotos com rotação automática
│   │   ├── Solutions.tsx     # grid de soluções (gotejamento, aspersão, pivô...)
│   │   ├── Diagnostic.tsx    # "o que você precisa resolver" (7 botões interativos)
│   │   ├── Brands.tsx        # marquee de marcas representadas/fornecidas
│   │   ├── Clients.tsx       # logos de clientes + depoimentos
│   │   ├── Store.tsx         # seção da loja/balcão técnico
│   │   ├── About.tsx         # seção "a empresa"
│   │   ├── Contact.tsx       # formulário → WhatsApp
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx  # botão flutuante
│   └── data/
│       └── content.ts        # TODO O CONTEÚDO DE TEXTO DO SITE (ver seção abaixo)
├── public/
│   ├── images/                # fotos e logos usados no site
│   ├── android-chrome-*.png, site.webmanifest
├── Home de irrigação com 3D/   # protótipo original (Claude Design Canvas) — só
│                                # referência de design local, NÃO está no Git
│                                # (está no .gitignore) e não faz parte do build
├── .env.example                # modelo das variáveis de ambiente (sem segredos)
├── package.json
└── README.md                   # este arquivo
```

## Rodando localmente

Pré-requisitos: **Node.js 20 ou mais recente** e **npm** (vem junto com o Node).

```bash
git clone https://github.com/RuralTop/site-rural-top.git
cd site-rural-top
npm install
cp .env.example .env.local     # ajuste os valores se necessário (veja tabela abaixo)
npm run dev
```

Abra **http://localhost:3000** no navegador.

### ⚠️ Nota importante para quem desenvolve dentro do Dropbox

Se a pasta do projeto ficar dentro de uma pasta sincronizada pelo Dropbox
(como aconteceu durante o desenvolvimento inicial): o Dropbox tenta
sincronizar `node_modules/` e `.next/` em tempo real enquanto o Next.js
escreve milhares de arquivos pequenos durante o build, e isso **já causou
corrupção real de build** (bundles JavaScript truncados, o site quebrava no
navegador com erro `Unexpected token`).

A correção aplicada nesta máquina foi marcar essas duas pastas como
**ignoradas pelo Dropbox** (atributo `com.dropbox.ignored`, recurso oficial
do Dropbox). Se você clonar o projeto em outro computador que também usa
Dropbox, rode isto uma vez, no PowerShell, dentro da pasta do projeto:

```powershell
Set-Content -Path "node_modules" -Stream com.dropbox.ignored -Value 1
Set-Content -Path ".next" -Stream com.dropbox.ignored -Value 1
```

**Recomendação melhor para o dia a dia:** trabalhe num clone do repositório
que fique **fora** de qualquer pasta sincronizada por Dropbox/Google
Drive/OneDrive (ex.: `C:\dev\site-rural-top`). O GitHub é a fonte de verdade
do código — o Dropbox não precisa (e não deveria) guardar uma cópia do
projeto sendo desenvolvido.

## Variáveis de ambiente

Veja `.env.example`. Nenhuma delas é secreta — existem só para não precisar
editar código ao trocar o domínio de produção ou o número de WhatsApp:

| Variável | Para que serve | Exemplo |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL canônica do site, usada em SEO (Open Graph, sitemap.xml, robots.txt) | `https://www.ruraltop.com.br` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp comercial usado em todos os botões/links do site — DDI + DDD + número, só dígitos | `5561996324385` |

Ao fazer o deploy (Vercel ou outro), configure essas duas variáveis no painel
da plataforma antes do primeiro build de produção.

## Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | inicia o servidor de desenvolvimento em http://localhost:3000 |
| `npm run build` | gera o build de produção (usado pela hospedagem) |
| `npm run start` | serve o build de produção localmente (rodar `build` antes) |
| `npm run lint` | verifica problemas de código com ESLint |
| `npm run typecheck` | verifica erros de tipo do TypeScript sem gerar arquivos |

## Como editar o conteúdo do site

**Quase todo texto do site vem de um único arquivo:** [`src/data/content.ts`](src/data/content.ts).
Não é necessário mexer nos componentes visuais para:

- trocar telefone, WhatsApp, endereço ou horário de atendimento → objeto `site`
- editar os 5 passos da seção "como trabalhamos" → array `processSteps`
- trocar as fotos da galeria automática → array `fieldPhotos`
- editar os 7 cenários do "diagnóstico rápido" e as respostas → arrays `challengeButtonLabels` e `challenges`
- adicionar/remover marcas representadas ou fornecidas → arrays `brandsRepresented` / `brandsSupplied`
- trocar logos de clientes → array `clientLogos`
- editar depoimentos → array `testimonials`
- editar os 9 cards de soluções → array `solutions`
- editar textos/fotos da seção "a empresa" → `aboutPhotos` / `aboutStats`

Para **trocar uma imagem**: coloque o novo arquivo em `public/images/...` e
atualize o caminho correspondente em `content.ts` (o caminho começa com `/`,
ex.: `/images/web/nome-do-arquivo.webp`). Prefira `.webp` — é o formato usado
em todo o site por ser leve.

Para **criar uma nova seção da página**: crie um componente em
`src/components/`, seguindo o padrão dos existentes, e importe-o em
`src/app/page.tsx`.

Para **criar uma página nova** (ex.: `/blog`, `/politica-de-privacidade`):
crie uma pasta `src/app/nome-da-rota/page.tsx` — o Next.js cria a rota
automaticamente (App Router).

Depois de qualquer edição, rode `npm run dev` e confira no navegador antes de
commitar.

## Deploy

**Ainda não foi feito.** Recomendação: **Vercel** — mesma empresa que mantém
o Next.js, deploy sem configuração manual, HTTPS e CDN automáticos, deploy
automático a cada `git push` na branch `main`, e uma URL de preview para cada
Pull Request.

Passo a passo:

1. Entrar em https://vercel.com/new com a conta da empresa
2. Importar o repositório `RuralTop/site-rural-top`
3. Antes do primeiro deploy, adicionar as variáveis de ambiente no painel do
   projeto (aba **Environment Variables**): `NEXT_PUBLIC_SITE_URL` e
   `NEXT_PUBLIC_WHATSAPP_NUMBER`
4. Confirmar o deploy — a Vercel detecta Next.js automaticamente, não precisa
   configurar build command nem output directory
5. O site fica disponível num link `algo.vercel.app`; depois disso dá para
   apontar um domínio próprio (ver abaixo)

**Domínio próprio:** opcional, e configurado *depois* do primeiro deploy —
o site funciona normalmente no link padrão da Vercel enquanto isso não é
feito. Quando houver um domínio da empresa disponível, configurá-lo é: adicionar
o domínio no painel da Vercel (aba **Domains** do projeto) e criar os
registros de DNS que a própria Vercel indicar (geralmente um `CNAME` ou `A`)
no provedor onde o domínio foi registrado.

Alternativas equivalentes à Vercel, caso prefira: **Netlify** ou
**Cloudflare Pages** — ambas têm suporte nativo a Next.js e fluxo parecido.

## SEO e acessibilidade

- Metadata completo (title, description, Open Graph, Twitter Card) em `src/app/layout.tsx`
- Dados estruturados `schema.org` (`HomeAndConstructionBusiness`, com endereço e telefone) em `src/app/page.tsx`
- `sitemap.xml` e `robots.txt` gerados automaticamente pelo Next.js
- Todas as imagens de conteúdo têm texto alternativo (`alt`) descritivo; imagens puramente decorativas usam `alt=""`
- HTML semântico (`header`, `main`, `section`, `footer`), labels associados a todos os campos de formulário, navegação funcional por teclado
- Respeita `prefers-reduced-motion` do sistema operacional (desliga animações para quem configurou isso)

## Testes já realizados

Antes de considerar o projeto pronto, foi validado:

- `npm run typecheck`, `npm run lint` e `npm run build` — todos sem erros
- Servidor de produção (`npm run start`) rodando localmente, todas as rotas (`/`, `/sitemap.xml`, `/robots.txt`, `/favicon.ico`, `/site.webmanifest`) respondendo `200`
- Navegação real em navegador headless (Playwright), em resolução desktop e mobile:
  - menu mobile abre e fecha corretamente
  - os 7 botões do "diagnóstico rápido" trocam o conteúdo do painel
  - formulário de contato: preenchimento e envio levam à tela de "recebemos seu contato" com link de WhatsApp preenchido
  - **zero erros de console** em qualquer uma das interações

Problemas encontrados durante o desenvolvimento e já corrigidos:
corrupção de build causada pelo Dropbox (ver nota acima), grid de soluções
que não fechava em 4 colunas no desktop, e sobreposição do botão flutuante de
WhatsApp com o menu mobile aberto.

## Troubleshooting

**O site quebra no navegador com erro `Unexpected token` no console** → o
build foi corrompido, quase sempre por sincronização do Dropbox/OneDrive
durante o `npm run dev`/`npm run build`. Apague a pasta `.next`, marque-a
como ignorada pelo serviço de sincronização (ver nota acima) e rode o build
de novo.

**`npm install` falha ou fica muito lento** → confirme a versão do Node
(`node -v`, precisa ser 20+) e tente rodar fora de uma pasta sincronizada por
nuvem.

**Mudei um texto em `content.ts` e não aparece no site** → confira se o
servidor de desenvolvimento está rodando (`npm run dev` recarrega sozinho) ou,
se estiver testando o build de produção, rode `npm run build` de novo antes
de `npm run start`.

## Manutenção e próximos passos

- O GitHub (`RuralTop/site-rural-top`) é a fonte de verdade do código — o
  Dropbox guarda só o protótipo original de design, como referência.
- Melhorias futuras que fazem sentido, mas não são bloqueantes: analytics
  (Google Analytics/GTM — já há um espaço reservado comentado em
  `.env.example`), formulário de contato também enviando por e-mail além do
  WhatsApp (exigiria um backend simples ou um serviço tipo Formspree/Resend),
  página de blog/artigos técnicos para SEO de conteúdo.
