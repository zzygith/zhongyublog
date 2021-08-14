/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 module.exports = {
  /* Your site config here */
   plugins: [
     `gatsby-transformer-remark`,
     `gatsby-transformer-sharp`,
     `gatsby-plugin-sharp`,
     `gatsby-plugin-react-head`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
     },
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
     },
  ],
  siteMetadata: {
    title: 'Zhongyu Zhang',
    description: 'web dev portfolio',
    copyright: '@Zhongyu Zhang, 2021',
    contact: 'zhangzhongyu98@gmail.com',
  },
}