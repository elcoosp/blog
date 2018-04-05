import React from 'react'
import PostCard from '../components/PostCard'
import List from '../ui/List'

const BlogPage = ({ data: { allMarkdownRemark: { edges } } }) => (
  <List>{edges.map(({ node }) => <PostCard {...node} key={node.id} />)}</List>
)

export const query = graphql`
  query PostsList {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          timeToRead
          excerpt(pruneLength: 140)
          frontmatter {
            path
            title
            date(fromNow: true)
            tags
          }
        }
      }
    }
  }
`
export default BlogPage
