// docusaurus.config.js
// Configurazione minima per partire

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Portfolio DevOps',
  tagline: 'Il mio portfolio da Linux Sysadmin / DevOps',
  url: 'https://example.com',       // puoi sostituire con il tuo dominio quando pubblicherai
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TUO-GITHUB-USERNAME', // GitHub username
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
};

module.exports = config;
