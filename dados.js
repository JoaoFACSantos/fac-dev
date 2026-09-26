// ============================================================
//  DADOS DO PORTEFÓLIO: edita só este ficheiro.
//  Projetos, stack e links são gerados a partir daqui.
// ============================================================
window.DADOS = {
  nome: 'FAC Dev',

  // Projetos: os 3 primeiros aparecem logo; os restantes ficam em "Ver todos".
  // site: link do site publicado (deixa '' para esconder o botão).
  // img: caminho para um screenshot (ex.: 'img/frusantos.jpg'). Vazio = ilustração automática.
  // estilo: 'fruta' | 'realia' | 'arnaut' | 'codigo' (ilustração usada quando não há img)
  projetos: [
    {
      nome: 'Frusantos',
      tipo: 'Tema WordPress + loja online',
      descricao: 'Tema feito de raiz, sem page builders. Loja WooCommerce, marcas, alojamentos e blog, com Tailwind CSS compilado por Vite.',
      tags: ['WordPress', 'WooCommerce', 'PHP', 'Tailwind'],
      site: 'https://frusantos.com',
      img: '',
      estilo: 'fruta'
    },
    {
      nome: 'Realia',
      tipo: 'SaaS imobiliário',
      descricao: 'Plataforma para gestão de imóveis, leads e conteúdos, com dashboard e gráficos de desempenho.',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
      site: '',
      img: '',
      estilo: 'realia'
    },
    {
      nome: 'Fotografia Arnaut',
      tipo: 'Site editorial + galerias privadas',
      descricao: 'Site para uma fotógrafa de Pombal, com galerias privadas por código de acesso, área de administração e uploads.',
      tags: ['JavaScript', 'Supabase', 'Edge Functions', 'PostgreSQL'],
      site: '',
      img: '',
      estilo: 'arnaut'
    },
    {
      nome: 'FAC Dev',
      tipo: 'Portefólio interativo',
      descricao: 'Este site. Animação em WebGL que obedece ao scroll: código que vira site, site que vira jogo.',
      tags: ['WebGL', 'Canvas', 'JavaScript'],
      site: '#top',
      img: '',
      estilo: 'codigo'
    }
  ],

  // Stack: [nome, ícone do devicon (devicon.dev) ou null]
  stack: [
    { grupo: 'Front-end', itens: [
      ['HTML', 'html5/html5-original'], ['CSS', 'css3/css3-original'], ['JavaScript', 'javascript/javascript-original'],
      ['TypeScript', 'typescript/typescript-original'], ['React', 'react/react-original'], ['Next.js', 'nextjs/nextjs-original'],
      ['Tailwind CSS', 'tailwindcss/tailwindcss-original']
    ]},
    { grupo: 'Back-end & dados', itens: [
      ['Node.js', 'nodejs/nodejs-original'], ['PHP', 'php/php-original'], ['WordPress', 'wordpress/wordpress-plain'],
      ['WooCommerce', 'woocommerce/woocommerce-original'], ['Supabase', 'supabase/supabase-original'], ['Python', 'python/python-original']
    ]},
    { grupo: 'Ferramentas & sistemas', itens: [
      ['Git', 'git/git-original'], ['Docker', 'docker/docker-original'], ['Linux', 'linux/linux-original'], ['Vite', 'vitejs/vitejs-original']
    ]},
    { grupo: 'Também', itens: [
      ['Java', 'java/java-original'], ['C++', 'cplusplus/cplusplus-original'], ['Canvas / WebGL', null], ['Claude (IA)', null]
    ]}
  ],

  // Links do contacto. Os que ficarem com url '' não aparecem.
  links: [
    { nome: 'GitHub', handle: 'JoaoFACSantos', url: 'https://github.com/JoaoFACSantos' },
    { nome: 'Email', handle: '', url: '' },      // TODO: ex. 'mailto:o-teu@email.com'
    { nome: 'LinkedIn', handle: '', url: '' },   // TODO
    { nome: 'Instagram', handle: '', url: '' }   // TODO
  ]
};
