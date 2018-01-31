module.exports = {
  siteMetadata: {
    title: 'Systemcluster',
    siteUrl: 'https://systemcluster.me',
    dateModified: `${Date.now().toString()}`
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-plugin-sharp',
          'gatsby-remark-images',
          'gatsby-remark-katex',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          // 'gatsby-remark-embed-snippet'
        ]
      }
    },
    'gatsby-transformer-json',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: "articles",
    //     path: `${__dirname}/src/articles`
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "markdown-pages",
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-104228705-1',
        anonymize: true
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        'icons': [
          {
              'src': '/android-chrome-192x192.png',
              'sizes': '192x192',
              'type': 'image/png'
          },
          {
              'src': '/android-chrome-512x512.png',
              'sizes': '512x512',
              'type': 'image/png'
          }
        ],
        'theme_color': '#ffffff',
        'background_color': '#ffffff',
        'display': 'standalone',
        'start_url': '/'
      }
    },
    'gatsby-plugin-offline'
  ],
};
