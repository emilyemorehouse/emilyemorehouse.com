import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { Text } from 'rebass'
import styled, { ThemeProvider } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Footer from '../components/Footer/Footer'
import config from '../../data/SiteConfig'
import './index.css'

library.add(fab, faEnvelope)

const theme = {
  colors: {
    blue: '#07c',
    lightgray: '#f6f6ff',
  },
  fonts: {
    sans: 'SourceSansPro, monospace',
    mono: 'SourceSansPro, monospace',
  },
}

const StyledLink = styled(Link)`
  color: black;
  left: 30px;
  padding: 5px;
  position: absolute;
  top: 30px;

  &:link,
  &:visited {
    color: black;
  }
  &:hover {
    background-color: black;
    color: white;
  }
`

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <ThemeProvider theme={theme}>
          <div>
            <StyledLink to="/">
              <Text fontFamily="mono">{config.userName}</Text>
            </StyledLink>

            {children}

            <Footer config={config} />
          </div>
        </ThemeProvider>
      </div>
    )
  }
}
