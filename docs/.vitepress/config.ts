
const github = 'https://github.com/test-results-reporter/reporter';
const releases = 'https://github.com/test-results-reporter/reporter/releases';
const packages = 'https://www.npmjs.com/package/test-results-reporter';

import { createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { SitemapStream } from 'sitemap';
import { defineConfig } from 'vitepress';

const links = []


/**
 * @type {import('vitepress').UserConfig}
 */
const config = defineConfig({
  title: 'Test Results Reporter',
  description: 'Report test results to slack, teams, chat and many more',
  lastUpdated: true,
  head: [
    ['meta', { property: 'og:title', content: 'Test Results Reporter' }],
    ['meta', { property: 'og:description', content: 'Report test results to slack, microsoft teams, google chat and many more' }],
    ['meta', { property: 'og:image', content: 'https://test-results-reporter.github.io/logo.png' }],
    [
      'script',
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-SRXB8G222W',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-SRXB8G222W');",
    ],
  ],
  themeConfig: {
    logo: '/logo.png',

    socialLinks: [
      { icon: 'github', link: github },
    ],

    editLink: {
      pattern: 'https://github.com/test-results-reporter/test-results-reporter.github.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    algolia: {
      appId: 'F3770ED7MS',
      apiKey: 'f194b97f485bfbfaf59661417fec4220',
      indexName: 'test-results-reporterio'
    },

    nav: [
      { text: 'Guides', link: '/guides/', activeMatch: '/guides/' },
      {
        text: `v1.x.x`,
        items: [
          {
            text: 'Releases',
            link: releases,
          },
          {
            text: 'NPM Package',
            link: packages,
          }
        ],
      },
    ],

    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'Introduction', link: '/guides/' },
          { text: 'Quick Start', link: '/guides/quick-start' },
          { text: 'Results', link: '/guides/results' },
          { text: 'Targets', link: '/guides/targets' },
          { text: 'Extensions', link: '/guides/extensions' },
          { text: 'Conditions', link: '/guides/conditions' },
          { text: 'Environment Variables', link: '/guides/environment-variables' },
        ]
      },
      {
        text: 'Targets',
        items: [
          { text: 'Slack', link: '/targets/slack' },
          { text: 'MS Teams', link: '/targets/teams' },
          { text: 'Google Chat', link: '/targets/chat' },
          { text: 'InfluxDB', link: '/targets/influx' },
          { text: 'Custom', link: '/targets/custom' },
          { text: 'Delay', link: '/targets/delay' },
        ]
      },
      {
        text: 'Extensions',
        items: [
          { text: 'CI Info', link: '/extensions/ci-info' },
          { text: 'Hyperlinks', link: '/extensions/hyperlinks' },
          { text: 'Mentions', link: '/extensions/mentions' },
          { text: 'Metadata', link: '/extensions/metadata' },
          { text: 'Report Portal Analysis', link: '/extensions/report-portal-analysis' },
          { text: 'Report Portal History', link: '/extensions/report-portal-history' },
          { text: 'Quick Chart Test Summary', link: '/extensions/quick-chart-test-summary' },
          { text: 'Percy Analysis', link: '/extensions/percy-analysis' },
          { text: 'Custom', link: '/extensions/custom' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'CI', link: '/examples/ci' },
          { text: 'Frameworks', link: '/examples/frameworks' },
        ]
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023'
    },
  },
  markdown: {
    lineNumbers: true
  },
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated
      })
  },
  buildEnd: ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: 'https://test-results-reporter.github.io/' })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
  }
})

export default config
