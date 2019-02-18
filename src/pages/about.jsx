import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Box, Flex, Heading } from 'rebass'

import About from '../components/About/About'
import SEO from '../components/SEO/SEO'
import Layout from '../layout'
import config from '../../data/SiteConfig'

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`About | ${config.siteTitle}`} />
        <SEO />

        <Flex
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: 'calc(100vh - 140px)' }}
        >
          <Box mt={80}>
            <About />
          </Box>
        </Flex>
      </Layout>
    )
  }
}

export default AboutPage
