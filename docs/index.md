---
layout: home

hero:
  name: Test Results Reporter
  tagline: Streamline team collaboration and stay informed with test results delivered to Microsoft Teams, Slack, Google Chat and many more...
  image:
    src: /logo.png
    alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /guides/
    - theme: alt
      text: View on GitHub
      link: https://github.com/test-results-reporter/testbeats
features:
  - title: Simple
    details: Minimal setup for reporting your test results to entities like Slack or Teams from different test frameworks.
  - title: Extendable
    details: Designed to be easily extendable, allowing for the addition of custom targets and extensions.
  - title: Declarative
    details: JSON centered simple and declarative configuration file.
footer: MIT Licensed | Copyright © 2023
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/ASaiAnudeep.png',
    name: 'Anudeep',
    title: 'Core Team',
    sponsor: 'https://github.com/sponsors/ASaiAnudeep',
    links: [
      { icon: 'github', link: 'https://github.com/ASaiAnudeep' },
      { icon: 'linkedin', link: 'https://in.linkedin.com/in/sai-anudeep-adimulapu' }
    ]
  },
  {
    avatar: 'https://github.com/leelaprasadv.png',
    name: 'Leela Prasad',
    title: 'Core Team',
    links: [
      { icon: 'github', link: 'https://github.com/leelaprasadv' },
      { icon: 'linkedin', link: 'https://in.linkedin.com/in/leelaprasadvadla' }
    ]
  },
]

window.location.href = "https://docs.testbeats.com";
</script>

<br>
<hr>
<br>
<VPTeamMembers size="small" :members="members" />
