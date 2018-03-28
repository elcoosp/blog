import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Navigation from '../Navigation'
import { T } from '../../utils/theme'
import { rotate, radiusChange } from '../../utils/keyframes'

const Header = styled.header`
  align-self: stretch;
  background-image: ${T('gradient.pm')};
  height: 100px;
  display: flex;
  box-shadow: ${T('shadow.small')};
  margin: 0px 0px ${T('spacing.large')} 0px;
  justify-content: center;
  align-items: center;

  ::after {
    content: '';
    background-image: ${T('gradient.sd')};
    border-radius: ${T('radius.small')};
    box-shadow: ${T('shadow.large')};
    position: absolute;
    top: 80px;
    display: block;
    width: 40px;
    height: 40px;
    animation: ${radiusChange} 10s ease-in-out infinite alternate,
      ${rotate} 90s infinite;
  }
`

export default () => (
  <Header>
    <Navigation />
  </Header>
)
