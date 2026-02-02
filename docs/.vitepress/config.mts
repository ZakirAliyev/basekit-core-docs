import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',

  title: 'Basekit Core',
  description:
      'Correct, Unicode-safe, locale-aware string utilities for JavaScript & TypeScript with zero dependencies.',

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    // ─────────────────────────────────────────────
    // TOP NAVIGATION
    // ─────────────────────────────────────────────
    nav: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'API Reference', link: '/api/string' },
      { text: 'Changelog', link: 'https://github.com/YOUR_GITHUB_USERNAME/basekit-core/blob/main/CHANGELOG.md' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Getting Started', link: '/guide/getting-started' }
        ]
      },
      {
        text: 'API Reference',
        items: [
          { text: 'String Utilities', link: '/api/string' },
          { text: 'Function Utilities', link: '/api/function' },
          { text: 'Object Utilities', link: '/api/object' },
          { text: 'Array Utilities', link: '/api/array' },
          { text: 'Number Utilities', link: '/api/number' },
          { text: 'Time Utilities', link: '/api/time' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YOUR_GITHUB_USERNAME/basekit-core' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present Zakir Aliyev'
    },

    search: {
      provider: 'local'
    }
  }
})
