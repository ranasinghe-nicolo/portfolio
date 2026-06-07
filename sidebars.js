// sidebars.js
module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Portfolio',
      items: [
        'intro',
        'technologies',
        'experience',
        {
          type: 'category',
          label: 'My Projects',
          items: [
            'my-projects/index',
            'my-projects/terraform-automation',
            'my-projects/kubernetes-monitoring',
            'my-projects/preventix',
            'my-projects/dammn-project',
            'my-projects/veromap',
          ],
        },
        'contact',
      ],
    },
  ],
};
