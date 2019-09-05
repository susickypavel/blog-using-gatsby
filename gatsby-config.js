module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: "src/utils/typography"
      }
    }
  ],
  siteMetadata: {
    description: "Personal blog of Paul from Czech",
    twitter: "@Thesoreon"
  }
}
