module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
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
