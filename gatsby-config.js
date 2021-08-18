/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const ymId = process.env.YM;

/* eslint-disable */
module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-plugin-less",
    "gatsby-transformer-json",
    "gatsby-transformer-mdx",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
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
