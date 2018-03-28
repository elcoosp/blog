const path = require('path')
const { kebabCase, get, each, uniq } = require('lodash')

exports.createPages = ({ boundActionCreators: { createPage }, graphql }) => {
  const PostComponent = path.resolve(`src/components/Post/index.js`)
  const TagPageComponent = path.resolve(`src/components/TagPage/index.js`)

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
              tags
            }
          }
        }
      }
    }
  `).then(({ errors, data }) => {
    if (errors) return Promise.reject(errors)
    const posts = data.allMarkdownRemark.edges

    // Posts pages
    posts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: PostComponent,
      })
    })

    // Tag pages
    let tags = []

    each(posts, edge => {
      if (get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    tags = uniq(tags)

    tags.forEach(tag =>
      createPage({
        path: `/tags/${kebabCase(tag)}/`,
        component: TagPageComponent,
        context: {
          tag,
        },
      })
    )
  })
}
