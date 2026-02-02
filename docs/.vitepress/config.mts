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
      { text: 'Docs', link: '/' },
      {
        text: 'GitHub',
        link: 'https://github.com/YOUR_GITHUB_USERNAME/basekit-core'
      }
    ],

    // ─────────────────────────────────────────────
    // SIDEBAR (REAL LIBRARY STRUCTURE)
    // ─────────────────────────────────────────────
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Core Concepts', link: '/core-concepts' }
        ]
      },
      {
        text: 'API Reference',
        items: [
          { text: 'String Casing', link: '/api-string-casing' },
          { text: 'String Formatting', link: '/api-string-formatting' },
          { text: 'String Comparison', link: '/api-string-comparison' }
        ]
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Advanced Topics', link: '/advanced' }
        ]
      }
    ],

    // ─────────────────────────────────────────────
    // GITHUB / SOCIAL
    // ─────────────────────────────────────────────
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/YOUR_GITHUB_USERNAME/basekit-core'
      }
    ],

    // ─────────────────────────────────────────────
    // FOOTER
    // ─────────────────────────────────────────────
    footer: {
      message: 'Released under the MIT License.',
      copyright:
          'Copyright © ' +
          new Date().getFullYear() +
          ' Basekit Contributors'
    },

    // ─────────────────────────────────────────────
    // SEARCH (LOCAL, FAST, NO ALGOLIA YET)
    // ─────────────────────────────────────────────
    search: {
      provider: 'local'
    },

    // ─────────────────────────────────────────────
    // DOCS UX
    // ─────────────────────────────────────────────
    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    editLink: {
      pattern:
          'https://github.com/YOUR_GITHUB_USERNAME/basekit-core-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
