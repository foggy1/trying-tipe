module.exports = {
  siteMetadata: {
    title: 'Gatsby + Tipe',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-transformer-json'
  ],
}
