import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styledNormalize from 'styled-normalize'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import theme from '../utils/theme'
import Header from '../components/Header'

injectGlobal` ${styledNormalize}

:root {
  scroll-behavior: smooth;
}
`
const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Helmet
        title="Elcoosp"
        meta={[
          { name: 'description', content: 'Elcoosp blog' },
          {
            name: 'keywords',
            content: 'blog, js, javascript, react, graphql, node, css',
          },
        ]}
      />
      <Header />
      <Main>{children()}</Main>
    </Wrapper>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
