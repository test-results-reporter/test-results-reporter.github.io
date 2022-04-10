/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Test Results Reporter',
  description: 'Report test results to slack, teams and many more',
  lastUpdated: true,
  themeConfig: {
    logo: 'assets/images/logo.png',
    nav: [
      { text: 'GitHub', link: 'https://github.com/test-results-reporter/reporter' }
    ],
    sidebar: {
      '/': [
        {
          text: 'Guides',
          children: [
            { text: 'Introduction', link: '/guides/intro' },
            { text: 'Quick Start', link: '/guides/quick-start' }
          ]
        },
        {
          text: 'Targets',
          children: [
            { text: 'Slack', link: '/targets/slack' }
          ]
        }
      ]
    }
  }
}