import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Navigation from '../Navigation'
import { T } from '../../utils/theme'

const StyledLink = styled(Link)`
  text-align: center;
  flex: 1;
  color: white;
  padding: ${T('spacing.medium')} ${T('spacing.small')};
  ${T('transitionAll.normal')};
  border-radius: ${T('radius.small')};
  border: 2px solid transparent;
  :hover {
    ${T('transitionAll.normal')};
    transform: translateX(2px) rotate(2deg) translateY(2px);
    border-radius: ${T('radius.large')};

    box-shadow: ${T('shadow.small')};
    border: 2px solid white;
  }
`
const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 60%;
  flex-wrap: wrap;
`
export default () => (
  <NavContainer>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/blog">Blog</StyledLink>
    <StyledLink to="/about">About</StyledLink>
  </NavContainer>
)
