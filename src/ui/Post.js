import styled from 'styled-components'
import React from 'react'
import Link from 'gatsby-link'

import { T } from '../utils/theme'
import { fadeIn } from '../utils/keyframes'

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: 0.3s ${fadeIn};
`

const Content = styled.div`
  width: 100%;
  ${T('transitionAll.normal')};
`
// Card style is for displaying an excerpt of the post with many others
// Whereas Post is a standalone Post
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  border: 1px solid ${T('palette.gray')};
  box-shadow: 0px 2px ${T('palette.gray')};
  animation: 0.3s ${fadeIn};

  border-radius: ${T('radius.medium')};
  margin: ${T('spacing.large')};
  padding: ${T('spacing.large')};
  ${T('transitionAll.slow')};

  :hover {
    ${T('transitionAll.slow')};
    box-shadow: ${T('shadow.small')};
  }
`

export default {
  Container,
  Content,
  Card,
}
