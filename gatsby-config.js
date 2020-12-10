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
  ],
};
