/**
 * @type {import('vuepress/config').Config}
 */
module.exports = {
  title: 'Test Results Reporter',
  description: 'Report test results to slack, teams and many more',
  head: [
    ['meta', { property: 'og:title', content: 'Test Results Reporter' }],
    ['meta', { property: 'og:description', content: 'Report test results to slack, microsoft teams and many more' }],
    ['meta', { property: 'og:image', content: 'https://test-results-reporter.github.io/logo.png' }],
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-SRXB8G222W',
      },
    ],
    [
      'script',
      {},
      [
        "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-SRXB8G222W');",
      ],
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: 'Last Updated',

    search: true,
    searchMaxSuggestions: 10,

    nav: [
      { text: '🌟 GitHub', link: 'https://github.com/test-results-reporter/reporter' }
    ],

    sidebar: [
      {
        title: '📚 Guides',
        collapsable: false,
        children: [
          '/guides/intro',
          '/guides/quick-start',
          '/guides/results',
          '/guides/targets',
          '/guides/extensions',
          '/guides/environment-variables'
        ]
      },
      {
        title: '🎯 Targets',
        collapsable: false,
        children: [
          '/targets/slack',
          '/targets/teams',
          '/targets/custom',
          '/targets/delay'
        ]
      },
      {
        title: '🪜 Extensions',
        collapsable: false,
        children: [
          '/extensions/hyperlinks',
          '/extensions/mentions',
          '/extensions/report-portal-analysis',
          '/extensions/report-portal-history',
          '/extensions/quick-chart-test-summary'
        ]
      }
    ],

    docsRepo: 'test-results-reporter/test-results-reporter.github.io',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '✏️ Help us improve this page!'
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      'vuepress-plugin-sitemap',
      {
        hostname: 'https://test-results-reporter.github.io/'
      }
    ],
  ],

}