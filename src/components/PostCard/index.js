import styled from 'styled-components'
import React from 'react'
import Link from 'gatsby-link'

import { T } from '../../utils/theme'
import { fadeIn } from '../../utils/keyframes'

import Title from '../../ui/Title'
import Badge from '../../ui/Badge'
import List from '../../ui/List'
import { Content, Card } from '../../ui/Post'
import TagsList from '../TagsList'

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

export default PostCard
