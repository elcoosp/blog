import React from 'react'
import Link from 'gatsby-link'
import TagsList from '../components/TagsList'
import { Container, Post, Title, Content, Card } from '../ui/Post'
import List from '../ui/List'
import Badge from '../ui/Badge'

import styled from 'styled-components'

const PostCard = ({
  excerpt,
  id,
  timeToRead,
  frontmatter: { date, title, path, tags },
}) => {
  return (
    <Card>
      <Title>
        <Link to={path}>{title}</Link>
      </Title>
      <List>
        <Badge>
          <time>
            {timeToRead} {timeToRead > 1 ? 'minutes' : 'minute'} reading
          </time>
        </Badge>
        <Badge filled>{date}</Badge>
      </List>
      <Content>{excerpt}</Content>
      <TagsList tags={tags} />
    </Card>
  )
}

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
