import hsSign from './assets/hsSign.png';
import fortuna from './assets/fortuna.jpg';
import catalogo from './assets/catalogo.jpg';
import timeshape from './assets/timeshape.jpg';
import fotoRobo from './assets/fernandoRobo.jpg';
import type { Lang } from './lib/lang';

export type Link = { label: string; href: string };

export const links = {
  email: 'fehdacostaquintanilhafilho@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fernando-quintanilha',
  github: 'https://github.com/Fernando-Quintanilha',
  whatsapp: 'https://wa.me/5562984048425',
  robotCode: 'https://github.com/Fernando-Quintanilha/FtcRobotController-master',
};

export const assets = {
  photo: fotoRobo,
  // Modelo e silhueta do robô (public/). null volta para a foto e para o desenho provisório.
  robotModelUrl: '/models/robot.glb' as string | null,
  spriteUrl: '/robot-top.png' as string | null,
};

export type Project = {
  name: string;
  summary: string;
  stack: string[];
  links: Link[];
  note?: string;
  image?: string;
};

type Stat = { value?: number; text?: string; label: string };

export type Content = {
  meta: { title: string };
  resumeUrl: string;
  nav: { work: string; projects: string; robotics: string; contact: string; resume: string; menu: string; close: string; home: string };
  profile: { first: string; last: string; role: string; line: string; hintClick: string; hintTouch: string; hintStatic: string };
  work: {
    label: string;
    title: string;
    company: string;
    role: string;
    period: string;
    city: string;
    intro: string;
    stats: Stat[];
    systems: { name: string; what: string; stack: string }[];
  };
  projects: { label: string; title: string; screenshotOf: string; items: Project[] };
  robotics: {
    label: string;
    title: string;
    season: string;
    intro: string;
    code: string;
    carry: { title: string; items: string[] };
    photoAlt: string;
    caption3d: string;
    captionPhoto: string;
    awards: { year: string; text: string }[];
    atlas: string;
  };
  contact: {
    label: string;
    title: string;
    about: string[];
    where: string;
    email: string;
    photoCaption: string;
    photoAlt: string;
  };
  footer: { made: string; hint: string };
  notFound: { code: string; title: string; back: string };
  linksPage: { portfolio: string };
};

const stack = {
  timeshape: ['C# .NET', 'React', 'PostgreSQL', 'Docker', 'outbox/inbox', 'CI'],
  holerite: ['.NET 8', 'React', 'PostgreSQL', 'Redis', 'MinIO', 'Docker'],
  fortuna: ['React', 'TypeScript', 'Vite', 'Firebase'],
  catalogo: ['Python', 'Pandas', 'React', 'TypeScript'],
};

const pt: Content = {
  meta: { title: 'Fernando Quintanilha — desenvolvedor back-end' },
  resumeUrl: '/Fernando-Quintanilha-Curriculo.pdf',
  nav: {
    work: 'trabalho',
    projects: 'projetos',
    robotics: 'robótica',
    contact: 'contato',
    resume: 'currículo',
    menu: 'menu',
    close: 'fechar',
    home: 'Fernando Quintanilha, voltar ao início',
  },
  profile: {
    first: 'Fernando',
    last: 'Quintanilha',
    role: 'desenvolvedor back-end · goiânia',
    line: 'Desenvolvedor back-end. Coloco sistemas em produção, do banco Oracle à tela do vendedor.',
    hintClick: 'clique no campo para mudar a rota',
    hintTouch: 'toque no campo para mudar a rota',
    hintStatic: 'rota planejada',
  },
  work: {
    label: 'trabalho',
    title: 'Sistemas que a empresa usa todo dia.',
    company: 'TH Distribuidora',
    role: 'Analista de TI e Sistemas / Desenvolvedor',
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
    ],
    systems: [
      { name: 'Painel gerencial', what: 'Financeiro, estoque e vendedores integrados ao Sankhya pelo API Gateway com OAuth.', stack: 'Node.js · serverless · Vercel' },
      { name: 'Painel do vendedor', what: 'PWA com valores conciliados ao relatório de comissão.', stack: 'PBKDF2 · HMAC-SHA256 · CSP · HSTS' },
      { name: 'Força de vendas', what: 'Pedidos, liberações e área administrativa, para substituir um sistema terceirizado pago.', stack: 'React · Node.js · Sankhya' },
      { name: 'Painéis de TV', what: 'Produtividade do estoque e desempenho dos motoristas, nas telas do galpão.', stack: 'React · Sankhya · WMS' },
      { name: 'Catálogo digital', what: 'Cerca de 4 mil itens com pedido pelo WhatsApp.', stack: 'React · Python' },
      {
        name: 'Banco e infraestrutura',
        what: 'Oracle de produção, WildFly 11 → 23 e a produção do ERP restabelecida no mesmo dia num incidente causado por triggers.',
        stack: 'Oracle · SQL · Linux · Windows Server',
      },
    ],
  },
  projects: {
    label: 'projetos',
    title: 'Projetos que eu construí.',
    screenshotOf: 'Tela do',
    items: [
      {
        name: 'TimeShape',
        summary:
          'SaaS de agendamento em produção: o aluno reserva horário sem criar conta, a agenda sincroniza com o Google Calendar e a assinatura é cobrada pelo Mercado Pago. O próprio banco de dados impede duas reservas no mesmo horário.',
        stack: stack.timeshape,
        links: [{ label: 'app.timeshape.online', href: 'https://app.timeshape.online' }],
        image: timeshape,
        note: 'código privado, mostro na entrevista',
      },
      {
        name: 'HoleriteSign',
        summary: 'O RH sobe o holerite em PDF, o funcionário recebe o link por WhatsApp, confirma os dados e assina com selfie. Em uso: mais de 980 holerites assinados.',
        stack: stack.holerite,
        links: [],
        note: 'código privado, mostro na entrevista',
        image: hsSign,
      },
      {
        name: 'Fortuna.io',
        summary: 'Finanças pessoais: entradas e gastos por categoria, com alerta quando os gastos passam da receita e sincronização em tempo real.',
        stack: stack.fortuna,
        links: [
          { label: 'ver no ar', href: 'https://fortuna-io.vercel.app' },
          { label: 'código', href: 'https://github.com/Fernando-Quintanilha/fortuna-io' },
        ],
        image: fortuna,
      },
      {
        name: 'Catálogo StakeHolder',
        summary: 'Transforma uma planilha em vitrine web com carrinho e pedido pelo WhatsApp.',
        stack: stack.catalogo,
        links: [{ label: 'ver no ar', href: 'https://catalogo-stake-holder.vercel.app' }],
        image: catalogo,
      },
    ],
  },
  robotics: {
    label: 'robótica',
    title: 'Comecei programando um robô para andar sozinho.',
    season: 'Into the Deep · 2024–25',
    intro:
      'Comecei na robótica FIRST aos 12 anos. Programei em Java o robô para se mover sozinho, usando sensores e câmera para saber onde ele está no campo (odometria, controle PID, IMU, AprilTags e OpenCV).',
    code: 'código do robô',
    carry: {
      title: 'O que levei para o trabalho',
      items: [
        'Java orientado a objetos e máquinas de estado: a base do back-end que escrevo hoje.',
        'Documentação premiada no nacional: hoje escrevo o plano antes de mexer no banco de produção.',
        'Ensinar 50 jovens: explicar sistema para quem não é técnico, como faço com os usuários na TH.',
      ],
    },
    photoAlt: 'Fernando com o robô da equipe na competição FTC',
    caption3d: 'modelo do CAD · role para girar',
    captionPhoto: 'torneio nacional FTC',
    awards: [
      { year: '2026', text: 'Juiz voluntário da seletiva de Goiás da FTC e mentor de equipes' },
      { year: '2025', text: 'Prêmio Nacional de Excelência em Engenharia e Documentação — Torneio Nacional FTC' },
      { year: '2025', text: '1º lugar geral (Inspire) — etapa regional FTC' },
      { year: '2024', text: 'Prêmio Nacional de Excelência em Software e Controle Autônomo — Torneio Nacional FTC' },
      { year: '2023', text: 'Palestrante na Campus Party Goiás' },
    ],
    atlas:
      'Cofundei a Atlas Tech Education (2023–2026): ensinei lógica e robótica para cerca de 50 jovens e mentorei 12 estudantes em competições FIRST.',
  },
  contact: {
    label: 'contato',
    title: 'Procuro vaga de back-end ou full-stack.',
    about: [
      'Estudo Engenharia de Software na UniAlfa e trabalho na TH desde janeiro de 2026.',
      'Gosto de problema que tem banco de dados no meio: consistência, segurança e conferir o número até bater.',
    ],
    where: 'Remoto ou presencial em Goiânia.',
    email: 'Mandar um e-mail',
    photoCaption: 'torneio nacional FTC',
    photoAlt: 'Fernando Quintanilha com o robô da equipe no torneio nacional FTC',
  },
  footer: { made: 'feito à mão em React', hint: 'psst: digite rawr' },
  notFound: { code: 'erro 404', title: 'Essa rota não existe.', back: 'voltar ao início' },
  linksPage: { portfolio: 'Portfólio' },
};

const en: Content = {
  meta: { title: 'Fernando Quintanilha — back-end developer' },
  resumeUrl: '/Fernando-Quintanilha-Resume.pdf',
  nav: {
    work: 'work',
    projects: 'projects',
    robotics: 'robotics',
    contact: 'contact',
    resume: 'resume',
    menu: 'menu',
    close: 'close',
    home: 'Fernando Quintanilha, back to top',
  },
  profile: {
    first: 'Fernando',
    last: 'Quintanilha',
    role: 'back-end developer · goiânia, brazil',
    line: 'Back-end developer. I ship systems to production, from the Oracle database to the salesperson’s screen.',
    hintClick: 'click the field to change the route',
    hintTouch: 'tap the field to change the route',
    hintStatic: 'planned route',
  },
  work: {
    label: 'work',
    title: 'Systems the company runs on every day.',
    company: 'TH Distribuidora',
    role: 'IT and Systems Analyst / Developer',
    period: 'Jan 2026 – present',
    city: 'Goiânia, Brazil',
    intro:
      'I’m the IT professional at a building-materials distributor. I look after the production Oracle database and the servers, and I build the internal systems integrated with the Sankhya ERP.',
    stats: [
      { value: 1431, label: 'product replacement costs fixed after a marketplace integration incident' },
      { text: '10 → 17', label: 'production PostgreSQL upgraded, zero mismatches in the final check' },
      { text: '~8.6k', label: 'receivables consolidated in the management dashboard' },
      { value: 4, label: 'bank integrations: CNAB 240 Safra, Sicoob, Santander and Sicredi' },
      { value: 3, label: 'cloud servers: Linux, Windows Server and Oracle' },
    ],
    systems: [
      { name: 'Management dashboard', what: 'Finance, inventory and sales, integrated with Sankhya through its API Gateway with OAuth.', stack: 'Node.js · serverless · Vercel' },
      { name: 'Sales rep app', what: 'PWA whose figures reconcile with the commission report.', stack: 'PBKDF2 · HMAC-SHA256 · CSP · HSTS' },
      { name: 'Sales force app', what: 'Orders, approvals and an admin area, replacing a paid third-party system.', stack: 'React · Node.js · Sankhya' },
      { name: 'Warehouse TV dashboards', what: 'Picking productivity and driver performance, on the warehouse screens.', stack: 'React · Sankhya · WMS' },
      { name: 'Digital catalog', what: 'About 4,000 items with ordering through WhatsApp.', stack: 'React · Python' },
      {
        name: 'Database and infrastructure',
        what: 'Production Oracle, WildFly 11 → 23, and the ERP back in production the same day after an incident caused by triggers.',
        stack: 'Oracle · SQL · Linux · Windows Server',
      },
    ],
  },
  projects: {
    label: 'projects',
    title: 'Projects I built.',
    screenshotOf: 'Screenshot of',
    items: [
      {
        name: 'TimeShape',
        summary:
          'Scheduling SaaS in production: students book a slot without creating an account, the calendar syncs with Google Calendar and subscriptions are billed through Mercado Pago. The database itself prevents two bookings at the same time.',
        stack: stack.timeshape,
        links: [{ label: 'app.timeshape.online', href: 'https://app.timeshape.online' }],
        image: timeshape,
        note: 'private code, happy to walk through it in an interview',
      },
      {
        name: 'HoleriteSign',
        summary: 'HR uploads the payslip PDF, the employee gets a link on WhatsApp, confirms their details and signs with a selfie. In use: over 980 payslips signed.',
        stack: stack.holerite,
        links: [],
        note: 'private code, happy to walk through it in an interview',
        image: hsSign,
      },
      {
        name: 'Fortuna.io',
        summary: 'Personal finance: income and spending by category, with an alert when spending goes over income and real-time sync.',
        stack: stack.fortuna,
        links: [
          { label: 'live', href: 'https://fortuna-io.vercel.app' },
          { label: 'code', href: 'https://github.com/Fernando-Quintanilha/fortuna-io' },
        ],
        image: fortuna,
      },
      {
        name: 'Catálogo StakeHolder',
        summary: 'Turns a spreadsheet into a web storefront with a cart and ordering through WhatsApp.',
        stack: stack.catalogo,
        links: [{ label: 'live', href: 'https://catalogo-stake-holder.vercel.app' }],
        image: catalogo,
      },
    ],
  },
  robotics: {
    label: 'robotics',
    title: 'I started by programming a robot to drive itself.',
    season: 'Into the Deep · 2024–25',
    intro:
      'I joined FIRST robotics at 12. I programmed the robot in Java to drive itself, using sensors and a camera to know where it is on the field (odometry, PID control, IMU, AprilTags and OpenCV).',
    code: 'robot code',
    carry: {
      title: 'What I brought to work',
      items: [
        'Object-oriented Java and state machines: the base of the back-end code I write today.',
        'Award-winning documentation at nationals: today I write the plan before touching the production database.',
        'Teaching 50 students: explaining systems to non-technical people, as I do with the users at TH.',
      ],
    },
    photoAlt: 'Fernando with the team robot at the FTC competition',
    caption3d: 'CAD model · scroll to rotate',
    captionPhoto: 'FTC national championship',
    awards: [
      { year: '2026', text: 'Volunteer judge at the FTC Goiás qualifier and team mentor' },
      { year: '2025', text: 'National Award for Excellence in Engineering and Documentation — FTC Brazil National Championship' },
      { year: '2025', text: '1st place overall (Inspire Award) — FTC regional qualifier' },
      { year: '2024', text: 'National Award for Excellence in Software and Autonomous Control — FTC Brazil National Championship' },
      { year: '2023', text: 'Speaker at Campus Party Goiás' },
    ],
    atlas:
      'I co-founded Atlas Tech Education (2023–2026): taught logic and robotics to about 50 young students and mentored 12 of them in FIRST competitions.',
  },
  contact: {
    label: 'contact',
    title: 'Looking for a back-end or full-stack role.',
    about: [
      'I study Software Engineering at UniAlfa and have worked at TH since January 2026.',
      'I like problems with a database in the middle: consistency, security, and checking the numbers until they match.',
    ],
    where: 'Remote, or on-site in Goiânia, Brazil.',
    email: 'Send an email',
    photoCaption: 'FTC national championship',
    photoAlt: 'Fernando Quintanilha with the team robot at the FTC national championship',
  },
  footer: { made: 'handmade with React', hint: 'psst: type rawr' },
  notFound: { code: 'error 404', title: 'This route doesn’t exist.', back: 'back to start' },
  linksPage: { portfolio: 'Portfolio' },
};

export const content: Record<Lang, Content> = { pt, en };
