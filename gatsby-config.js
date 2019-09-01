module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Pavel Susicky's blog",
        short_name: "PS's blog",
        start_url: "/",
        background_color: "#000",
        theme_color: "#000",
        display: "standalone"
      }
    }
  ]
}
