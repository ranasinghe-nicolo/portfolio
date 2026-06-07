// docusaurus.config.js
// Configurazione minima per partire

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Portfolio DevOps',
  tagline: 'Il mio portfolio da Linux Sysadmin / DevOps',
  url: 'hhttps://ranasinghe-nicolo.github.io/portfolio/',       // puoi sostituire con il tuo dominio quando pubblicherai
  baseUrl: '/portfolio-devops/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ranasinghe-nicolo', // GitHub username
  projectName: 'portfolio-devops',         // repo name
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Portfolio DevOps',
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Introduzione',
        },
        {
          type: 'doc',
          docId: 'technologies',
          position: 'left',
          label: 'Tecnologie',
        },
        {
          type: 'doc',
          docId: 'experience',
          position: 'left',
          label: 'Esperienze',
        },
        {
          type: 'doc',
          docId: 'my-projects/index',
          position: 'left',
          label: 'Progetti',
        },
        {
          type: 'doc',
          docId: 'contact',
          position: 'left',
          label: 'Contatti',
        },
      ],
    },
  },
};

module.exports = config;
