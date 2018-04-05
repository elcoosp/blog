import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Navigation from '../Navigation'
import { T } from '../../utils/theme'
import circleSquareRotating from '../../ui/circleSquareRotating'

const Header = styled.header`
  align-self: stretch;
  background-image: ${T('gradient.pm')};
  height: 100px;
  display: flex;
  box-shadow: ${T('shadow.small')};
  margin: 0px 0px ${T('spacing.large')} 0px;
  justify-content: center;
  align-items: center;
  ${circleSquareRotating};
`

export default () => (
  <Header>
    <Navigation />
  </Header>
)
