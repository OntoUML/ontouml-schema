// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes: prismThemes } = require('prism-react-renderer');
const lightCodeTheme = prismThemes.github;
const darkCodeTheme = prismThemes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OntoUML Schema',
  tagline: 'The JSON serialization of OntoUML ontologies',
  favicon: 'img/favicon.ico',

  // Production url of the site.
  url: 'https://ontouml.github.io',
  // The /<baseUrl>/ pathname under which the site is served.
  // For the project page https://ontouml.github.io/ontouml-schema/ this is '/ontouml-schema/'.
  baseUrl: '/ontouml-schema/',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  trailingSlash: true,

  // GitHub pages deployment config.
  organizationName: 'OntoUML', // GitHub org/user name.
  projectName: 'ontouml-schema', // Repo name.
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Enable Mermaid so docs can embed OntoUML/UML diagrams in ```mermaid blocks.
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: [
    '@docusaurus/theme-mermaid',
    // Offline, build-time full-text search (no external service required).
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        // Must stay false: `hashed: true` appends a `?_=<hash>` query to the
        // index URL, which `trailingSlash: true` then 302-redirects to a 404,
        // breaking search (infinite spinner). See the search-index fetch path.
        hashed: false,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Serve the docs at the site's root (e.g. /ontouml-schema/ ).
          routeBasePath: '/',
          sidebarCollapsible: true,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/OntoUML/ontouml-schema/tree/master/website/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OntoUML Schema',
        logo: {
          alt: 'OntoUML Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'schema',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/OntoUML/ontouml-schema',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'Welcome', to: '/' },
              { label: 'Getting Started', to: '/getting-started' },
              { label: 'Document Structure', to: '/document-structure' },
            ],
          },
          {
            title: 'Reference',
            items: [
              { label: 'Structural', to: '/structural' },
              { label: 'Abstract Syntax', to: '/abstract-syntax' },
              { label: 'Concrete Syntax', to: '/concrete-syntax' },
              { label: 'Datatypes', to: '/datatypes' },
              { label: 'Enumerations', to: '/enumerations' },
              { label: 'Metadata', to: '/metadata' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'ontouml-schema', href: 'https://github.com/OntoUML/ontouml-schema' },
              { label: 'OntoUML Metamodel', href: 'https://github.com/OntoUML/ontouml-metamodel' },
              { label: 'OntoUML on GitHub', href: 'https://github.com/OntoUML' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OntoUML.org`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
