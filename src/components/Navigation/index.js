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
  transition: all 0.3s ease-in-out;
  border-radius: ${T('radius.small')};

  :hover {
    transition: all 0.3s ease-in-out;
    box-shadow: ${T('shadow.small')};
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
