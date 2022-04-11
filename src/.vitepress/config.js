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
            { text: 'Links', link: '/extensions/links' },
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