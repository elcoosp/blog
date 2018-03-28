import React from 'react'
import Badge from '../../ui/Badge'
import List from '../../ui/List'
import { Container, Post, Title, Content } from '../../ui/Post'
import TagsList from '../../components/TagsList'

export default ({ data: { markdownRemark: { frontmatter, html } } }) => {
  const { title, date, tags } = frontmatter

  return (
    <Container>
      <Title>{title}</Title>
      <Badge>{date}</Badge>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
      <TagsList tags={tags} />
    </Container>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(fromNow: true)
        path
        title
        tags
      }
    }
  }
`
