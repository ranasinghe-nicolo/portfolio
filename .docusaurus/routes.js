import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/portfolio/docs',
    component: ComponentCreator('/portfolio/docs', 'f91'),
    routes: [
      {
        path: '/portfolio/docs',
        component: ComponentCreator('/portfolio/docs', '3bf'),
        routes: [
          {
            path: '/portfolio/docs',
            component: ComponentCreator('/portfolio/docs', '7ed'),
            routes: [
              {
                path: '/portfolio/docs/contact',
                component: ComponentCreator('/portfolio/docs/contact', 'de4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/portfolio/docs/experience',
                component: ComponentCreator('/portfolio/docs/experience', '99f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/portfolio/docs/intro',
                component: ComponentCreator('/portfolio/docs/intro', '929'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/portfolio/docs/my-projects/',
                component: ComponentCreator('/portfolio/docs/my-projects/', 'cca'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/portfolio/docs/my-projects/dammn-project',
                component: ComponentCreator('/portfolio/docs/my-projects/dammn-project', '2d5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/portfolio/docs/my-projects/kubernetes-monitoring',
                component: ComponentCreator('/portfolio/docs/my-projects/kubernetes-monitoring', '2e7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/portfolio/docs/my-projects/preventix',
                component: ComponentCreator('/portfolio/docs/my-projects/preventix', '8fe'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/portfolio/docs/my-projects/terraform-automation',
                component: ComponentCreator('/portfolio/docs/my-projects/terraform-automation', 'b8b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/portfolio/docs/my-projects/veromap',
                component: ComponentCreator('/portfolio/docs/my-projects/veromap', '446'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/portfolio/docs/technologies',
                component: ComponentCreator('/portfolio/docs/technologies', 'ab7'),
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
    path: '/portfolio/',
    component: ComponentCreator('/portfolio/', 'acb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
