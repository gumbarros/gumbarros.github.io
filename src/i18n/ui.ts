import type { Solution } from '../data/solutions';

export const defaultLocale = 'en' as const;
export const locales = ['en', 'pt-br', 'es'] as const;
export type Locale = (typeof locales)[number];

export const languageNames: Record<Locale, string> = {
  en: 'English',
  'pt-br': 'Português (Brasil)',
  es: 'Español',
};

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  'pt-br': 'PT',
  es: 'ES',
};

/* ------------------------------ UI strings ------------------------------ */
export const ui = {
  en: {
    nav: {
      solutions: '--what-i-do',
      portfolio: '--portfolio',
      featured: '--featured',
      about: '--about',
      contact: '--contact',
      blog: '--blog',
      github: '--github',
      language: 'language',
    },
    hero: {
      cmd: 'whoami',
      title: 'Gustavo Mauricio de&nbsp;Barros',
      lede: 'I turn ideas and complex operations into clear, reliable digital experiences — from a first conversation to a product that is ready to grow.',
      viewSolutions: 'view solutions',
      contact: 'contact',
    },
    solutions: {
      cmd: 'what-i-do',
      headline: 'Technology that makes the work feel simpler.',
      intro: 'I help businesses turn needs into useful, intuitive digital products — without making the process harder than it needs to be.',
      services: [
        { title: 'Digital products', body: 'From idea to launch, I help shape websites and systems that people can actually use with confidence.' },
        { title: 'Clearer operations', body: 'I organize processes and information so your team can spend less time managing work and more time doing it.' },
        { title: 'Built to last', body: 'Thoughtful foundations let a product evolve as your business, customers, and goals change.' },
      ],
    },
    portfolio: {
      cmd: 'portfolio',
      headline: 'Selected work',
      intro: 'A few products, platforms, and open-source contributions I have helped bring to life.',
      visit: 'visit project',
      details: 'view details',
    },
    featuredProject: {
      label: 'featured website',
      body: 'A warm, inviting digital home for a music school in Atibaia — designed to make the first step toward music feel natural.',
      visit: 'visit Casa da Música',
    },
    about: {
      cmd: 'whoami --verbose',
      headline: 'A partner for turning complexity into progress.',
      body: "I'm a software architect and developer at <a href=\"https://www.jjconsulting.com.br\">JJConsulting</a>. I turn ambitious ideas into practical, reliable products that are ready to evolve.",
      status: 'running',
      events: [
        { year: '2019', text: 'Started Systems Analysis and Development at IFSP' },
        { year: '2019', text: 'Joined JJConsulting as an intern' },
        { year: '2020', text: 'Became a developer. Embraced remote work during the pandemic.' },
        { year: '2022', text: 'Graduated in Systems Analysis and Development from IFSP' },
        { year: '2025', text: 'Became a Tech Lead' },
        { year: '2026', text: 'Became a Software Architect' },
      ],
    },
    contact: {
      cmd: 'contact',
      headline: 'Have an idea, a challenge, or a process that could work better?',
      linkedin: 'linkedin /in/gumbarros',
      github: 'github /gumbarros',
      photo: 'me.png',
    },
    footer: {
      brand: 'Gustavo Mauricio de Barros',
      line1: 'Built from 🇧🇷',
      mit: 'MIT libraries',
    },
    meta: {
      title: 'Gustavo Mauricio de Barros · Software Architect',
      description: 'Digital products and systems that make complex work feel simple.',
    },
  },
  'pt-br': {
    nav: {
      solutions: '--o que faço',
      portfolio: '--portfólio',
      featured: '--destaque',
      about: '--sobre',
      contact: '--contato',
      blog: '--blog',
      github: '--github',
      language: 'idioma',
    },
    hero: {
      cmd: 'whoami',
      title: 'Gustavo Mauricio de&nbsp;Barros',
      lede: 'Transformo ideias e operações complexas em experiências digitais claras e confiáveis — da primeira conversa a um produto pronto para crescer.',
      viewSolutions: 'ver soluções',
      contact: 'contato',
    },
    solutions: {
      cmd: 'o-que-faço',
      headline: 'Tecnologia que deixa o trabalho mais simples.',
      intro: 'Ajudo negócios a transformar necessidades em produtos digitais úteis e intuitivos — sem complicar o processo.',
      services: [
        { title: 'Produtos digitais', body: 'Da ideia ao lançamento, ajudo a criar sites e sistemas que as pessoas usam com segurança.' },
        { title: 'Operações mais claras', body: 'Organizo processos e informações para sua equipe gastar menos tempo gerenciando o trabalho e mais tempo fazendo.' },
        { title: 'Feito para durar', body: 'Uma boa base permite que o produto acompanhe as mudanças do negócio, das pessoas e dos objetivos.' },
      ],
    },
    portfolio: {
      cmd: 'portfólio',
      headline: 'Trabalhos selecionados',
      intro: 'Alguns produtos, plataformas e contribuições open source que ajudei a tirar do papel.',
      visit: 'visitar projeto',
      details: 'ver detalhes',
    },
    featuredProject: {
      label: 'site em destaque',
      body: 'Uma casa digital acolhedora para uma escola de música em Atibaia — criada para que o primeiro passo em direção à música seja natural.',
      visit: 'visitar Casa da Música',
    },
    about: {
      cmd: 'whoami --verbose',
      headline: 'Um parceiro para transformar complexidade em avanço.',
      body: 'Sou arquiteto de software e desenvolvedor na <a href="https://www.jjconsulting.com.br">JJConsulting</a>. Transformo ideias ambiciosas em produtos práticos, confiáveis e prontos para evoluir.',
      status: 'rodando',
      events: [
        { year: '2019', text: 'Iniciei Análise e Desenvolvimento de Sistemas no IFSP' },
        { year: '2019', text: 'Entrei na JJConsulting como estagiário' },
        { year: '2020', text: 'Tornei-me desenvolvedor; trabalhei remotamente durante a pandemia' },
        { year: '2022', text: 'Concluí o curso de Análise e Desenvolvimento de Sistemas no IFSP' },
        { year: '2025', text: 'Tornei-me Tech Lead' },
        { year: '2026', text: 'Tornei-me Arquiteto de Software' },
      ],
    },
    contact: {
      cmd: 'contato',
      headline: 'Tem uma ideia, um desafio ou um processo que pode funcionar melhor?',
      linkedin: 'linkedin /in/gumbarros',
      github: 'github /gumbarros',
      photo: 'me.png',
    },
    footer: {
      brand: 'Gustavo Mauricio de Barros',
      line1: 'Feito no 🇧🇷',
      mit: 'bibliotecas MIT',
    },
    meta: {
      title: 'Gustavo Mauricio de Barros · Arquiteto de Software',
      description: 'Produtos e sistemas digitais que deixam o trabalho complexo mais simples.',
    },
  },
  es: {
    nav: {
      solutions: '--lo que hago',
      portfolio: '--portafolio',
      featured: '--destacado',
      about: '--sobre',
      contact: '--contacto',
      blog: '--blog',
      github: '--github',
      language: 'idioma',
    },
    hero: {
      cmd: 'whoami',
      title: 'Gustavo Mauricio de&nbsp;Barros',
      lede: 'Convierto ideas y operaciones complejas en experiencias digitales claras y confiables, desde la primera conversación hasta un producto listo para crecer.',
      viewSolutions: 'ver soluciones',
      contact: 'contacto',
    },
    solutions: {
      cmd: 'lo-que-hago',
      headline: 'Tecnología que hace el trabajo más simple.',
      intro: 'Ayudo a los negocios a convertir necesidades en productos digitales útiles e intuitivos, sin complicar el proceso.',
      services: [
        { title: 'Productos digitales', body: 'De la idea al lanzamiento, ayudo a crear sitios y sistemas que las personas usan con confianza.' },
        { title: 'Operaciones más claras', body: 'Organizo procesos e información para que su equipo dedique menos tiempo a gestionar el trabajo y más a hacerlo.' },
        { title: 'Hecho para durar', body: 'Una base cuidadosa permite que el producto evolucione junto con el negocio, las personas y los objetivos.' },
      ],
    },
    portfolio: {
      cmd: 'portafolio',
      headline: 'Trabajo seleccionado',
      intro: 'Algunos productos, plataformas y contribuciones open source que ayudé a hacer realidad.',
      visit: 'visitar proyecto',
      details: 'ver detalles',
    },
    featuredProject: {
      label: 'sitio destacado',
      body: 'Un hogar digital acogedor para una escuela de música en Atibaia, creado para que el primer paso hacia la música sea natural.',
      visit: 'visitar Casa da Música',
    },
    about: {
      cmd: 'whoami --verbose',
      headline: 'Un socio para transformar la complejidad en progreso.',
      body: 'Soy arquitecto de software y desarrollador en <a href="https://www.jjconsulting.com.br">JJConsulting</a>. Transformo ideas ambiciosas en productos prácticos, confiables y listos para evolucionar.',
      status: 'ejecutando',
      events: [
        { year: '2019', text: 'Comencé Análisis y Desarrollo de Sistemas en IFSP' },
        { year: '2019', text: 'Me incorporé a JJConsulting como pasante' },
        { year: '2020', text: 'Me convertí en desarrollador; trabajé remotamente durante la pandemia' },
        { year: '2022', text: 'Me gradué en Análisis y Desarrollo de Sistemas por IFSP' },
        { year: '2025', text: 'Me convertí en Tech Lead' },
        { year: '2026', text: 'Me convertí en Arquitecto de Software' },
      ],
    },
    contact: {
      cmd: 'contacto',
      headline: '¿Tiene una idea, un desafío o un proceso que podría funcionar mejor?',
      linkedin: 'linkedin /in/gumbarros',
      github: 'github /gumbarros',
      photo: 'yo.png',
    },
    footer: {
      brand: 'Gustavo Mauricio de Barros',
      line1: 'Hecho en 🇧🇷',
      mit: 'bibliotecas MIT',
    },
    meta: {
      title: 'Gustavo Mauricio de Barros · Arquitecto de Software',
      description: 'Productos y sistemas digitales que hacen más simple el trabajo complejo.',
    },
  },
} as const;

export type UI = (typeof ui)[Locale];

/* -------------------------- Solution content ---------------------------- */
export const solutionContent: Record<
  Locale,
  Record<string, Pick<Solution, 'problem' | 'description' | 'role' | 'statsNote' | 'credit'>>
> = {
  en: {
    ncalc: {
      problem: 'Evaluate a user-typed expression without compiling C# at runtime.',
      description: 'A fast .NET expression evaluator. Literals, operators, parameters, built-in and custom functions.',
      role: 'contributor',
    },
    jjmasterdata: {
      problem: 'Every table needs a CRUD screen, and you have written the same one forty times.',
      description: 'Generates forms and CRUD from your database metadata. With events, validation, extensible.',
      role: 'maintainer',
      credit: 'Created by JJConsulting',
    },
    'fluentstorage-git': {
      problem: 'A blob store backed by a Git repo: commits as versions, push as persistence.',
      description: 'A Git provider for FluentStorage: read and write files in a repo working tree; versions map to commit history.',
      role: 'maintains the Git provider',
      statsNote: 'in the FluentStorage repo',
      credit: 'FluentStorage by Robin Rodricks',
    },
    embeddedsass: {
      problem: 'Compile Sass inside .NET, not via a Node child process.',
      description: 'A .NET implementation of the Embedded Sass Protocol with a native API.',
      role: 'author',
    },
  },
  'pt-br': {
    ncalc: {
      problem: 'Calcule uma expressão digitada pelo usuário sem compilar C# em tempo de execução.',
      description: 'Um evaluator de expressões .NET rápido: literais, operadores, parâmetros, funções internas e personalizadas.',
      role: 'colaborador',
    },
    jjmasterdata: {
      problem: 'Cada tabela precisa de uma tela de CRUD, e você já escreveu a mesma 500mil vezes.',
      description: 'Gera formulários e CRUD a partir dos metadados do seu banco de dados. Com eventos, validação, extensível.',
      role: 'mantenedor',
      credit: 'Criado pela JJConsulting',
    },
    'fluentstorage-git': {
      problem: 'Um armazenamento de blobs apoiado por um repositório Git. Commits como versões, push como persistência.',
      description: 'Um provedor Git para FluentStorage: leia e escreva arquivos na árvore de trabalho do repositório; as versões mapeiam o histórico de commits.',
      role: 'mantém o provedor Git',
      statsNote: 'no repositório FluentStorage',
      credit: 'FluentStorage por Robin Rodricks',
    },
    embeddedsass: {
      problem: 'Compile Sass dentro do .NET, não por um child process do Node.',
      description: 'Uma implementação .NET do protocolo Embedded Sass com uma API nativa.',
      role: 'autor',
    },
    'casa-da-musica': {
      problem: 'Um espaço digital para uma escola de música.',
      description: 'Uma presença digital acolhedora para quem está descobrindo e se conectando com a música.',
      role: 'projeto de site',
    },
  },
  es: {
    ncalc: {
      problem: 'Evalúe una expresión escrita por el usuario sin compilar C# en tiempo de ejecución.',
      description: 'Un evaluador de expresiones .NET rápido: literales, operadores, parámetros, funciones integradas y personalizadas.',
      role: 'colaborador',
    },
    jjmasterdata: {
      problem: 'Cada tabla necesita una pantalla CRUD, y ya has escrito la misma cuarenta veces.',
      description: 'Genera formularios y CRUD a partir de los metadatos de tu base de datos: eventos, validación, extensible.',
      role: 'mantenedor',
      credit: 'Creado por JJConsulting',
    },
    'fluentstorage-git': {
      problem: 'Un almacén de blobs respaldado por un repositorio Git: commits como versiones, push como persistencia.',
      description: 'Un proveedor Git para FluentStorage: lee y escribe archivos en el árbol de trabajo del repositorio; las versiones mapean el historial de commits.',
      role: 'mantiene el proveedor Git',
      statsNote: 'en el repositorio FluentStorage',
      credit: 'FluentStorage por Robin Rodricks',
    },
    embeddedsass: {
      problem: 'Compile Sass dentro de .NET, no mediante un proceso hijo de Node.',
      description: 'Una implementación .NET del protocolo Embedded Sass con una API nativa.',
      role: 'autor',
    },
    'casa-da-musica': {
      problem: 'Un espacio digital para una escuela de música.',
      description: 'Una presencia digital acogedora para quienes descubren y conectan con la música.',
      role: 'proyecto web',
    },
  },
};
