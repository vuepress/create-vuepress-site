const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Project Documentation System',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'References',
        link: '/references/',
      },
      {
        text: 'How to',
        link: '/how-to/',
      },
      {
        text: 'Tutorials',
        link: '/tutorials/',
      },
      {
        text: 'Explanations',
        link: '/explanations/',
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/references/': [
        {
          title: 'References',
          collapsable: false,
          children: [
            '',
            'documentation-system.md'
          ]
        }
      ],
      '/how-to/': [
        {
          title: 'How to',
          collapsable: false,
          children: [
            '',
            'contribute.md'
          ]
        }
      ],
      '/tutorials/': [
        {
          title: 'Tutorials',
          collapsable: false,
          children: [
            '',
            'create-a-doc.md'
          ]
        }
      ],
      '/explanations/': [
        {
          title: 'Explanations',
          collapsable: false,
          children: [
            ''
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
