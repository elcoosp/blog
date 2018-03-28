const path = require('path')

exports.createPages = ({ boundActionCreators: { createPage }, graphql }) => {
  const component = path.resolve(`src/components/Post/index.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(({ errors, data }) => {
    if (errors) return Promise.reject(errors)

    data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component,
        context: {},
      })
    })
  })
}
