require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Daily Composers",
  },
  plugins: [
      "gatsby-plugin-gatsby-cloud",
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
          resolve: "gatsby-source-filesystem",
          options: {
              name: `data`,
              path: `${__dirname}/src/data`,
          }
      },
      "gatsby-transformer-csv",
      "gatsby-transformer-json",
      {
          resolve: "gatsby-source-filesystem",
          options: {
              name: "data",
              path: `${__dirname}/src/data`,
          }
     },
  ],
};
