import React from 'react'
import styled, { withComponent } from 'styled-components'
import { kebabCase } from 'lodash'

import { BadgeLink } from '../../ui/Badge'
import List from '../../ui/List'

export default ({ tags }) => (
  <List>
    {tags.map(tag => {
      return typeof tag === 'string' ? (
        <BadgeLink linked scale to={`/tags/${kebabCase(tag)}`} key={tag}>
          {tag}
        </BadgeLink>
      ) : (
        <BadgeLink
          linked
          scale
          to={`/tags/${kebabCase(tag.fieldValue)}`}
          key={tag.fieldValue}
        >
          {`${tag.fieldValue} (${tag.totalCount})`}
        </BadgeLink>
      )
    })}
  </List>
)
