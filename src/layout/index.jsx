import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import config from '../../data/SiteConfig'
import './index.css'

library.add(fab, faEnvelope)

const theme = {
  colors: {
    blue: '#07c',
    lightgray: '#f6f6ff',
  },
  fonts: {
    sans: 'Menlo, monospace',
    mono: 'Menlo, monospace',
  },
}

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <ThemeProvider theme={theme}>
          <div>{children}</div>
        </ThemeProvider>
      </div>
    )
  }
}
