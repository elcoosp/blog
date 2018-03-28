import styled from 'styled-components'
import { T } from '../utils/theme'
import React from 'react'
import Link from 'gatsby-link'

const Badge = styled.span`
  font-size: 0.8rem;
  border: 1px solid white;
  color: ${p => (p.filled ? 'white' : T('palette.red')(p))};
  background-image: ${p => (p.filled ? T('gradient.pm')(p) : 'white')};
  padding: ${T('spacing.small')};
  margin: ${T('spacing.medium')};
  border-radius: ${T('radius.small')};
  text-align: center;
  ${T('transitionAll.normal')};
  box-shadow: ${T('shadow.small')};
  cursor: ${p => (p.linked ? 'pointer' : 'auto')};

  :hover {
    background-image: ${p => (p.filled ? T('gradient.pm')(p) : 'white')};
    ${p => p.scale && 'transform: scale(1.1)'};
    ${T('transitionAll.speed')};
  }
`
export const BadgeLink = Badge.withComponent(({ filled, linked, ...rest }) => (
  <Link {...rest} />
))
export default Badge
