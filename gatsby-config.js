module.exports = {
  siteMetadata: {
    title: 'FEM Gatsby Workshop',
    description:
      'A site we built together during a full-day Frontend Masters Gatsby workshop!',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato\:400,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // what layout i wanna use in mdx files.
        // require.resolve() gives the absolute path.
        defaultLayouts: {
          // any mdx file we load, will be loaded into layout.js template.
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        // required, it will look for the folder and load anything inside to the data layer.
        path: 'posts',
      },
    },
  ],
};
