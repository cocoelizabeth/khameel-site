/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Khameel Simon`,
    siteUrl: `https://www.khameel.com`,
    description:
      "Luxury newborn care specialist and overnight newborn support for families in Brooklyn and NYC.",
  },
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    `gatsby-plugin-decap-cms`,
    "gatsby-plugin-sitemap", 
    "gatsby-transformer-remark", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/images/`,
      },
      __key: "images"
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "content",
        "path": `${__dirname}/content/`,
      },
      __key: "content"
    }
  ],
};