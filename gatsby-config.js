/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const ymId = process.env.GATSBY_YM;

require("dotenv").config({
  path: '.env',
})

/* eslint-disable */
module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-plugin-less",
    "gatsby-transformer-json",
    "gatsby-plugin-material-ui",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'wiki',
        path: `${__dirname}/src/docs/`,
      },
    },
    "gatsby-plugin-mdx",
    !!ymId && {
      resolve: 'gatsby-plugin-yandex-metrika',
      options: {
        trackingId: ymId,
        afterBody: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      },
    }
  ].filter(Boolean)
};
