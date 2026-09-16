export const site = {
  name: "Rural Top",
  legalName: "Rural Top Comercial Agrícola Ltda.",
  tagline: "Comercial Agrícola",
  phone: "(61) 3234-8130",
  phoneHref: "tel:+556132348130",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5561996324385",
  whatsappLabel: "(61) 99632-4385",
  instagramHandle: "@ruraltop.oficial",
  instagramUrl: "https://instagram.com/ruraltop.oficial",
  address: {
    line1: "SIA Quadra 5C, Sia",
    line2: "Brasília — DF, 71200-055",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=SIA%20Quadra%205C%2C%20Sia%2C%20Bras%C3%ADlia%20DF%2C%2071200-055%2C%20Brasil",
  },
  hours: "Segunda a sexta, 8h às 18h",
};

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const processSteps = [
  {
    n: "01",
    title: "Entendemos a área",
    body: "Levantamento da necessidade, cultura, disponibilidade de água e condições da propriedade.",
    accent: "green" as const,
  },
  {
    n: "02",
    title: "Projetamos",
    body: "Dimensionamento hidráulico e definição da solução, com cálculo de vazão, pressão e perda de carga.",
    accent: "green" as const,
  },
  {
    n: "03",
    title: "Fornecemos",
    body: "Equipamentos e componentes das principais marcas do mercado, com estoque de reposição.",
    accent: "green" as const,
  },
  {
    n: "04",
    title: "Implantamos",
    body: "Equipe de campo própria para execução, montagem e partida do sistema.",
    accent: "green" as const,
  },
  {
    n: "05",
    title: "Acompanhamos",
    body: "Suporte, manutenção e pós-venda. Projeto bom não termina na venda.",
    accent: "blue" as const,
  },
];

export type FieldPhoto = { src: string; alt: string; cap: string };

export const fieldPhotos: FieldPhoto[] = [
  { src: "/images/web/aspersao-contraluz.webp", alt: "Dois aspersores em operação ao fim da tarde, contra o sol", cap: "Aspersão em operação no fim da tarde" },
  { src: "/images/web/aspersores-linha.webp", alt: "Linha de aspersores irrigando área cercada", cap: "Linha de aspersores cobrindo a área" },
  { src: "/images/web/aspersor-gramado.webp", alt: "Aspersor irrigando gramado extenso em contraluz", cap: "Área consolidada, lâmina uniforme" },
  { src: "/images/web/aspersao-canteiro.webp", alt: "Aspersão sobre canteiros recém-implantados", cap: "Canteiros recém-implantados sob aspersão" },
  { src: "/images/web/conexoes-hidraulicas.webp", alt: "Conexões e registros de PVC da rede hidráulica", cap: "Conexões e registros da rede hidráulica" },
  { src: "/images/web/manometro-campo.webp", alt: "Leitura de manômetro na linha de irrigação em campo", cap: "Pressão conferida na linha, em campo" },
  { src: "/images/web/aspersao-arvores.webp", alt: "Aspersão em área arborizada", cap: "Aspersão em área arborizada" },
  { src: "/images/web/aspersor-cerca.webp", alt: "Aspersor em operação em área de solo preparado", cap: "Solo preparado, sistema em partida" },
  { src: "/images/web/aspersao-faixas.webp", alt: "Faixas de cultivo irrigadas por aspersão", cap: "Faixas de cultivo irrigadas por aspersão" },
];

export type Challenge = { title: string; body: string; bullets: [string, string, string] };

export const challenges: Challenge[] = [
  {
    title: "Projeto novo, do zero",
    body: "Começamos entendendo a área antes de falar de equipamento: cultura, topografia, água disponível e energia. O sistema vem depois da conta.",
    bullets: [
      "Levantamento da área e da disponibilidade hídrica",
      "Dimensionamento hidráulico e projeto executivo",
      "Fornecimento e implantação com equipe própria",
    ],
  },
  {
    title: "Ampliação de sistema existente",
    body: "Ampliar área quase sempre mexe no bombeamento. Verificamos se a rede e a bomba atuais suportam a nova demanda antes de vender mais linha.",
    bullets: [
      "Avaliação da rede e da pressão disponível hoje",
      "Recálculo de bomba, linha principal e setorização",
      "Integração com o sistema em operação, sem parar a rega",
    ],
  },
  {
    title: "Queda de vazão e pressão",
    body: "Perda de desempenho tem causa identificável: entupimento, filtro saturado, vazamento na rede ou bomba fora do ponto de operação.",
    bullets: [
      "Diagnóstico técnico em campo",
      "Verificação de filtragem, emissores, rede e bomba",
      "Reposição de componentes e ajuste do manejo",
    ],
  },
  {
    title: "Dimensionamento de bombeamento",
    body: "Uma bomba mal dimensionada custa energia todo mês e desgasta o sistema. Calculamos vazão e altura manométrica reais da propriedade.",
    bullets: [
      "Cálculo de vazão, altura manométrica e perda de carga",
      "Seleção de bomba, motor e proteção elétrica",
      "Casa de bomba, sucção e instalação hidráulica",
    ],
  },
  {
    title: "Automação da irrigação",
    body: "Automatizar organiza o turno de rega e reduz trabalho manual. Definimos o comando conforme os setores e a fonte de água.",
    bullets: [
      "Programadores, válvulas e solenoides",
      "Setorização por turno de rega",
      "Comando, cabeamento e proteção elétrica",
    ],
  },
  {
    title: "Manutenção e assistência",
    body: "O campo não espera. Atendemos sistemas já instalados, inclusive de outros fornecedores, com peça em estoque e equipe própria.",
    bullets: [
      "Atendimento técnico em campo",
      "Peças de reposição disponíveis no balcão",
      "Limpeza de linhas e revisão de filtragem",
    ],
  },
  {
    title: "Peças e componentes",
    body: "Loja e balcão técnico no SIA, com vendedor que conhece irrigação e ajuda a identificar a peça certa pela medida e pela aplicação.",
    bullets: [
      "Balcão técnico com vendedor especializado",
      "Gotejamento, aspersão, bombas, filtros e automação",
      "Tubos, conexões e componentes hidráulicos",
    ],
  },
];

export const challengeButtonLabels = [
  "Quero irrigar uma nova área.",
  "Quero ampliar meu sistema.",
  "Minha irrigação perdeu desempenho.",
  "Preciso trocar ou dimensionar minha bomba.",
  "Quero automatizar minha irrigação.",
  "Preciso de manutenção.",
  "Preciso comprar peças.",
];

export type Brand = { name: string; tag: string; accent: "green-strong" | "blue" | "lime" | "green-soft" };

export const brandsRepresented: Brand[] = [
  { name: "Rain Bird", tag: "aspersão · automação", accent: "green-soft" },
  { name: "Netafim", tag: "gotejamento", accent: "blue" },
  { name: "Senninger", tag: "aspersão · pivô", accent: "lime" },
  { name: "Ebara", tag: "bombeamento", accent: "green-strong" },
  { name: "Tigre", tag: "tubos e conexões", accent: "green-soft" },
  { name: "Viqua", tag: "tratamento de água", accent: "blue" },
  { name: "Ginegar", tag: "filmes e telas", accent: "lime" },
  { name: "Technes", tag: "equipamentos de irrigação", accent: "green-strong" },
];

export const brandsSupplied: Brand[] = [
  { name: "Amanco", tag: "tubos e conexões", accent: "lime" },
  { name: "Irritec", tag: "gotejamento", accent: "green-strong" },
  { name: "Rivulis", tag: "gotejamento", accent: "green-soft" },
  { name: "Azud", tag: "filtragem", accent: "blue" },
  { name: "Thebe", tag: "bombeamento", accent: "lime" },
  { name: "Schneider", tag: "motobombas", accent: "green-strong" },
  { name: "Condor", tag: "aspersão", accent: "green-soft" },
  { name: "Haifa", tag: "nutrição · fertirrigação", accent: "blue" },
  { name: "Polysack", tag: "filmes e telas", accent: "lime" },
  { name: "Irrigabras", tag: "equipamentos de irrigação", accent: "green-strong" },
];

export const clientLogos = [
  { src: "/images/clientes/vinicola-brasilia.webp", alt: "Vinícola Brasília" },
  { src: "/images/clientes/fazenda-malunga.webp", alt: "Fazenda Malunga" },
  { src: "/images/clientes/fazenda-sao-pedro.webp", alt: "Fazenda São Pedro" },
  { src: "/images/clientes/vale-verde-mudas.webp", alt: "Vale Verde Mudas" },
  { src: "/images/clientes/h2orti.webp", alt: "H2Orti Hidroponia" },
  { src: "/images/clientes/grupo-otavio-lage.webp", alt: "Grupo Otávio Lage" },
  { src: "/images/clientes/vitivinicola.webp", alt: "Condomínio Vitivinícola Engenho das Lages" },
  { src: "/images/clientes/ercoara.webp", alt: "Ercoara Cordeiro e Vinho" },
  { src: "/images/clientes/corteva.webp", alt: "Corteva Agriscience" },
  { src: "/images/clientes/vibra.webp", alt: "Vibra" },
  { src: "/images/clientes/sesi-senai.webp", alt: "SESI e SENAI" },
];

export type Testimonial = {
  eyebrow: string;
  quote: string;
  name: string;
  org: string;
  accent: "green" | "blue" | "mid";
  clamp?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    eyebrow: "GOTEJAMENTO · LARANJA · 42 HA",
    quote:
      '"Fizemos a aquisição de 01 conjunto de irrigação sistema gotejo junto a Rural Top. Foi instalado na cultura da laranja-42,00 há. Após discutirmos todo o orçamento não somente no que se refere a preço, mas principalmente a qualidade dos equipamentos visando a boa eficiência e longevidade decidimos pela aquisição. Afirmo que tudo o que foi definido por ocasião do pedido foi entregue, montado e colocado em funcionamento. Está funcionando muito bem e tudo automatizado. Além da boa parceria que fizemos os técnicos e proprietários da Rural Top periodicamente estão na propriedade aferindo se está tudo em perfeito funcionamento. Tudo foi concluído conforme orçamento, qualidade e prazo. Recomendo a parceria."',
    name: "HELIO PIFFER",
    org: "FAZENDA SÃO PEDRO",
    accent: "green",
    clamp: true,
  },
  {
    eyebrow: "PARCERIA DE LONGA DATA",
    quote:
      '"A parceria de longa data da Vale Verde Mudas com a Rural Top é um exemplo de confiança, inovação e crescimento mútuo. Juntos, construímos uma história de sucesso, compartilhando valores e comprometimento com a excelência."',
    name: "AUGUSTO SHIBATA",
    org: "VALE VERDE MUDAS",
    accent: "blue",
  },
  {
    eyebrow: "SISTEMA COMPLETO · +15 ANOS",
    quote:
      '"Mais de 15 anos cliente da Rural Top, todo nosso sistema de irrigação montado na fazenda veio por meio da empresa. Conhecimento técnico e serviço sempre na hora demandada. Consideramos um parceria de sucesso total."',
    name: "JOE VALLE",
    org: "FAZENDA MALUNGA",
    accent: "mid",
  },
];

export const storeTags = [
  "GOTEJAMENTO",
  "ASPERSÃO",
  "BOMBAS",
  "FILTRAGEM",
  "AUTOMAÇÃO",
  "TUBOS E CONEXÕES",
];

export type Solution = {
  n: string;
  tag: string;
  title: string;
  body: string;
  image?: { src: string; alt: string };
  span?: 2;
  dark?: boolean;
};

export const solutions: Solution[] = [
  {
    n: "01",
    tag: "ASPERSÃO",
    title: "Emissor, vazão e espaçamento",
    body: "Dimensionamento e fornecimento de sistemas com diferentes emissores, vazões e espaçamentos. A sobreposição é calculada para a área receber lâmina uniforme, do primeiro ao último aspersor da linha.",
    image: { src: "/images/web/aspersores-linha.webp", alt: "Linha de aspersores em operação em área irrigada no Distrito Federal" },
    span: 2,
  },
  {
    n: "02",
    tag: "MICROASPERSÃO",
    title: "Cobertura fina e controlada",
    body: "Projetos para diferentes culturas e necessidades de manejo, com emissores selecionados por vazão e diâmetro de molhamento.",
    dark: true,
  },
  {
    n: "03",
    tag: "GOTEJAMENTO",
    title: "Água na raiz, sem desperdício",
    body: "Aplicação localizada na região radicular, com filtragem que mantém a linha limpa ao longo da safra.",
    image: { src: "/images/web/microaspersor-jato.webp", alt: "Emissor em operação aplicando água sobre a cultura, com jato em contraluz" },
  },
  {
    n: "04",
    tag: "PIVÔ CENTRAL",
    title: "Área grande, manejo previsível",
    body: "Projeto, fornecimento e implantação de sistemas de pivô, do bombeamento ao último emissor do lance.",
    span: 2,
  },
  {
    n: "05",
    tag: "BOMBEAMENTO",
    title: "Vazão e altura manométrica",
    body: "Bombas, motobombas e componentes hidráulicos dimensionados para o ponto de operação real. Uma bomba mal dimensionada custa energia todo mês.",
  },
  {
    n: "06",
    tag: "AUTOMAÇÃO",
    title: "Turnos de rega no controle",
    body: "Programadores, válvulas, solenoides e componentes para comandar a irrigação por setor.",
  },
  {
    n: "07",
    tag: "FILTRAGEM",
    title: "O que protege o sistema",
    body: "Filtros de tela, disco e areia definidos pela qualidade da água da propriedade.",
  },
  {
    n: "08",
    tag: "TUBULAÇÕES E CONEXÕES",
    title: "Da adutora ao ramal",
    body: "Tubos, conexões e componentes hidráulicos especificados junto com o projeto.",
    image: { src: "/images/web/conexoes-hidraulicas.webp", alt: "Conexões e registros de PVC montados na rede hidráulica de um sistema de irrigação" },
  },
];

export const maintenanceCard = {
  tag: "09 / MANUTENÇÃO",
  title: "Diagnóstico antes da troca",
  body: "Perda de pressão, entupimento de emissor, bomba cavitando: identificamos a causa, repomos o componente e ajustamos o sistema existente.",
  image: { src: "/images/web/manometro-campo.webp", alt: "Técnico medindo a pressão da linha de irrigação em campo" },
};

export const aboutPhotos = [
  { src: "/images/web/aspersor-gramado.webp", alt: "Aspersor em operação em área de gramado consolidado, contra o sol do fim da tarde", cap: "SISTEMA EM OPERAÇÃO — ÁREA CONSOLIDADA" },
  { src: "/images/web/aspersao-arvores.webp", alt: "Aspersão cobrindo área arborizada em propriedade atendida pela Rural Top", cap: "ÁREA ARBORIZADA — COBERTURA POR ASPERSÃO" },
  { src: "/images/web/socios-rural-top.webp", alt: "Os três sócios da Rural Top reunidos na sede da empresa", cap: "OS SÓCIOS DA RURAL TOP — BRASÍLIA, DF" },
];

export const aboutStats = [
  { title: "+15 anos", body: "de mercado atendendo produtores do DF e região." },
  { title: "Projetos", body: "equipe com conhecimento agronômico e hidráulico para dimensionar o sistema." },
  { title: "Campo", body: "equipe de montagem e implantação que entra na propriedade e executa." },
  { title: "Loja", body: "balcão técnico e estoque de reposição no SIA, em Brasília." },
];
