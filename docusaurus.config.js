// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NVS Marketing Knowledgebase',
  tagline: '',
  favicon: 'img/favicon.ico',
  noIndex: true,

  // Set the production url of your site here
  url: 'https://know.that.ee',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'adsSidebar',
            position: 'left',
            label: 'Ads',
          },
          {
            type: 'docSidebar',
            sidebarId: 'seoSidebar',
            position: 'left',
            label: 'SEO',
          },
          {
            href: 'https://github.com/robineero/nvs-knowledge-base/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Ads',
                to: '/docs/ads/intro',
              },
              {
                label: 'SEO',
                to: '/docs/seo/intro',
              },
            ],
          },
          {
            title: 'Useful links',
            items: [
              {
                label: 'Ahrefs Blog',
                href: 'https://ahrefs.com/blog/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/robineero/nvs-knowledge-base/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    scripts: [
    // String format.
    'https://docusaurus.io/script.js',
    // Object format.
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
      async: true,
    },
    {
      src: 'https://analytics.ahrefs.com/analytics.js', 'data-key': 'kzx2Aupq7zTbbWMALTXq7Q', async: true,
    },
  ],
};

export default config;