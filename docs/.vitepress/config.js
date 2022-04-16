/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Test Results Reporter',
  description: 'Report test results to slack, teams and many more',
  lastUpdated: true,
  themeConfig: {
    logo: 'logo.png',
    lastUpdated: 'Last Updated',

    search: true,
    searchMaxSuggestions: 10,

    nav: [
      { text: 'GitHub', link: 'https://github.com/test-results-reporter/reporter' }
    ],

    sidebar: {
      '/': [
        {
          text: 'Guides',
          children: [
            { text: 'Introduction', link: '/guides/intro' },
            { text: 'Quick Start', link: '/guides/quick-start' },
            { text: 'Results', link: '/guides/results' },
            { text: 'Targets', link: '/guides/targets' },
            { text: 'Extensions', link: '/guides/extensions' },
            { text: 'Environment Variables', link: '/guides/environment-variables' }
          ]
        },
        {
          text: 'Targets',
          children: [
            { text: 'Slack', link: '/targets/slack' },
            { text: 'Teams', link: '/targets/teams' },
            { text: 'Custom', link: '/targets/custom' },
          ]
        },
        {
          text: 'Extensions',
          children: [
            { text: 'Hyperlinks', link: '/extensions/hyperlinks' },
            { text: 'Report Portal Analysis', link: '/extensions/report-portal-analysis' }
          ]
        }
      ]
    }
  },
  markdown: {
    lineNumbers: true
  }
}