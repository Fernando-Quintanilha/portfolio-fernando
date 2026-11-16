import hsSign from './assets/hsSign.png';
import fortuna from './assets/dashfortune.png';
import catalogo from './assets/catalogoTh.png';
import fotoRobo from './assets/fernandoRobo.jpg';

export type Link = { label: string; href: string };

export const links = {
  email: 'fehdacostaquintanilhafilho@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fernando-quintanilha',
  github: 'https://github.com/Fernando-Quintanilha',
  whatsapp: 'https://wa.me/5562984048425',
  curriculo: '/Fernando-Quintanilha-Curriculo.pdf',
};

export const profile = {
  first: 'Fernando',
  last: 'Quintanilha',
  role: 'desenvolvedor back-end · goiânia',
  line: 'Coloco sistemas em produção, do banco Oracle à tela do vendedor.',
};

export const work = {
  company: 'TH Distribuidora',
  role: 'Desenvolvedor e TI',
  period: 'jan/2026 – atual',
  city: 'Goiânia',
  intro:
    'Sou o profissional de TI de uma distribuidora de materiais de construção. Cuido do banco Oracle de produção, dos servidores e construo os sistemas internos integrados ao ERP Sankhya.',
  stats: [
    { value: 1431, label: 'custos de reposição corrigidos após um incidente de marketplace' },
    { text: '10 → 17', label: 'PostgreSQL de produção migrado, zero divergência na conferência' },
    { text: '~8,6 mil', label: 'títulos a receber consolidados no painel gerencial' },
    { value: 4, label: 'integrações bancárias: CNAB 240 Safra, Sicoob, Santander e Sicredi' },
    { value: 3, label: 'servidores em nuvem: Linux, Windows Server e Oracle' },
  ] as Array<{ value?: number; text?: string; label: string }>,
  systems: [
    {
      name: 'Painel gerencial',
      what: 'Financeiro, estoque e vendedores integrados ao Sankhya pelo API Gateway com OAuth.',
      stack: 'Node.js · serverless · Vercel',
    },
    {
      name: 'Painel do vendedor',
      what: 'PWA com valores conciliados ao relatório de comissão.',
      stack: 'PBKDF2 · HMAC-SHA256 · CSP · HSTS',
    },
    {
      name: 'Força de vendas',
      what: 'Pedidos, liberações e área administrativa, para substituir um sistema terceirizado pago.',
      stack: 'React · Node.js · Sankhya',
    },
    {
      name: 'Painéis de TV',
      what: 'Produtividade do estoque e desempenho dos motoristas, nas telas do galpão.',
      stack: 'React · Sankhya · Kaizen',
    },
    {
      name: 'Catálogo digital',
      what: 'Cerca de 4 mil itens com pedido pelo WhatsApp.',
      stack: 'React · Python',
    },
    {
      name: 'Banco e infraestrutura',
      what: 'Oracle de produção, WildFly 11 → 23 e a produção do ERP restabelecida no mesmo dia num incidente causado por triggers.',
      stack: 'Oracle · SQL · Linux · Windows Server',
    },
  ],
};

export type Project = {
  name: string;
  summary: string;
  stack: string[];
  links: Link[];
  note?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    name: 'TimeShape',
    summary:
      'SaaS de agendamento em produção: página pública de reservas, Google Calendar e assinatura recorrente pelo Mercado Pago. Constraint de exclusão no banco impede reserva sobreposta.',
    stack: ['C# .NET', 'React', 'PostgreSQL', 'Docker', 'outbox/inbox', 'CI'],
    links: [{ label: 'app.timeshape.online', href: 'https://app.timeshape.online' }],
    note: 'código privado, mostro na entrevista',
  },
  {
    name: 'HoleriteSign',
    summary:
      'O RH sobe o holerite em PDF, o funcionário recebe o link por WhatsApp, confirma os dados e assina com selfie.',
    stack: ['.NET 8', 'React', 'PostgreSQL', 'Redis', 'MinIO', 'Docker'],
    links: [],
    note: 'código privado, mostro na entrevista',
    image: hsSign,
  },
  {
    name: 'Fortuna.io',
    summary: 'PWA para acompanhar investimentos, com modo privacidade que esconde os valores na tela.',
    stack: ['React', 'TypeScript', 'Vite', 'PWA'],
    links: [
      { label: 'ver no ar', href: 'https://fortuna-io.vercel.app' },
      { label: 'código', href: 'https://github.com/Fernando-Quintanilha/fortuna-io' },
    ],
    image: fortuna,
  },
  {
    name: 'Catálogo StakeHolder',
    summary: 'Transforma uma planilha em vitrine web com carrinho e pedido pelo WhatsApp.',
    stack: ['Python', 'Pandas', 'React', 'TypeScript'],
    links: [{ label: 'ver no ar', href: 'https://catalogo-stake-holder.vercel.app' }],
    image: catalogo,
  },
];

export const robotics = {
  season: 'Into the Deep · 2024–25',
  // Preenchido quando public/models/robot.glb existe.
  robotModelUrl: '/models/robot.glb' as string | null,
  // Silhueta vista de cima usada pelo robô da entrada.
  spriteUrl: '/robot-top.png' as string | null,
  photo: fotoRobo,
  intro:
    'Comecei na robótica FIRST aos 12 anos. Programei a navegação autônoma do robô em Java: odometria, controle PID, IMU e visão com AprilTags e OpenCV.',
  code: { label: 'código do robô', href: 'https://github.com/Fernando-Quintanilha/FtcRobotController-master' },
  awards: [
    { year: '2025', text: 'Prêmio Nacional de Excelência em Engenharia e Documentação — Torneio Nacional FTC' },
    { year: '2025', text: '1º lugar geral (Inspire) — etapa regional FTC' },
    { year: '2024', text: 'Prêmio Nacional de Excelência em Software e Controle Autônomo — Torneio Nacional FTC' },
    { year: '2023', text: 'Palestrante na Campus Party Goiás' },
    { year: '2026', text: 'Juiz voluntário da seletiva de Goiás da FTC e mentor de equipes' },
  ],
  atlas:
    'Cofundei a Atlas Tech Education (2023–2026): ensinei lógica e robótica para cerca de 50 jovens e mentorei 12 estudantes em competições FIRST.',
};

export const about = [
  'Estudo Engenharia de Software na UniAlfa e trabalho na TH desde janeiro de 2026.',
  'Gosto de problema que tem banco de dados no meio: consistência, segurança e conferir o número até bater.',
  'Antes de programar por profissão, vendi dinossauros no ARK.',
];
