/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage, createRedirect } = boundActionCreators;

  createRedirect({
	  fromPath: '/',
	  isPermanent: false,
	  redirectInBrowser: true,
	  toPath: '/articles'
  })

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            html
            id
            frontmatter {
			  path
              template
              date
              title
			  categories
			  coverimage
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const pagePath = node.frontmatter.path
      createPage({
        path: pagePath,
        component: path.resolve(
          `src/templates/${String(node.frontmatter.template)}.jsx`
        ),
        // additional data can be passed via context
        context: {
          path: pagePath
        }
      });
    });
  });
};
