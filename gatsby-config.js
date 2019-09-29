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
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog"
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          blog: require.resolve("./src/components/PageLayout.tsx")
        }
      }
    }
  ],
  siteMetadata: {
    description: "Personal blog of Paul from Czech",
    twitter: "@Thesoreon"
  }
}
