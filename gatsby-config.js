require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Daily Composers",
  },
  plugins: [
      "gatsby-plugin-gatsby-cloud",
      "gatsby-plugin-image",
      {
          resolve: `gatsby-plugin-sharp`,
          options: {
              defaults: {
                  formats: [`auto`, `webp`],
                  placeholder: `dominantColor`,
                  quality: 50,
                  breakpoints: [750, 1080, 1366, 1920],
                  backgroundColor: `transparent`,
                  tracedSVGOptions: {},
                  blurredOptions: {},
                  jpgOptions: {},
                  pngOptions: {},
                  webpOptions: {},
                  avifOptions: {},
              }
          }
      },
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
