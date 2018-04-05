import React from 'react'
import PropTypes from 'prop-types'
import Title from '../../ui/Title'
import { Card } from '../../ui/Post'

// Components
import Link from 'gatsby-link'

const Tags = ({ pathContext, data }) => {
  const { tag } = pathContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with `

  return (
    <div>
      <Title>{tagHeader}</Title>
      <ul>
        {edges.map(({ node }) => {
          const { path, title } = node.frontmatter
          return (
            <Card key={path}>
              <Link to={path}>{title}</Link>
            </Card>
          )
        })}
      </ul>
      <Link to="/tags">All tags</Link>
    </div>
  )
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default Tags
