import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '8b2'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '370'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '817'),
            routes: [
              {
                path: '/docs/contact',
                component: ComponentCreator('/docs/contact', '31f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/experience',
                component: ComponentCreator('/docs/experience', 'f73'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'a6e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/my-projects/',
                component: ComponentCreator('/docs/my-projects/', 'd17'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/my-projects/dammn-project',
                component: ComponentCreator('/docs/my-projects/dammn-project', '6ea'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/my-projects/kubernetes-monitoring',
                component: ComponentCreator('/docs/my-projects/kubernetes-monitoring', '82a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/my-projects/preventix',
                component: ComponentCreator('/docs/my-projects/preventix', '3bc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/my-projects/terraform-automation',
                component: ComponentCreator('/docs/my-projects/terraform-automation', '33d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/my-projects/veromap',
                component: ComponentCreator('/docs/my-projects/veromap', 'cf2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/technologies',
                component: ComponentCreator('/docs/technologies', '475'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
