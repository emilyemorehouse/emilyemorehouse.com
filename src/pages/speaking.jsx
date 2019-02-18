import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Box, Flex, Heading } from 'rebass'

import SEO from '../components/SEO/SEO'
import SpeakingListing from '../components/SpeakingListing/SpeakingListing'
import Layout from '../layout'
import config from '../../data/SiteConfig'

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Speaking | ${config.siteTitle}`} />
        <SEO />

        <Flex
          alignItems="center"
          justifyContent="center"
          p={24}
          style={{ minHeight: 'calc(100vh - 140px)' }}
        >
          <Box mt={80}>
            <Heading mb={40} fontFamily="mono" fontSize={[5, 6]} textAlign="center">
              Speaking
            </Heading>
            <SpeakingListing />
          </Box>
        </Flex>
      </Layout>
    )
  }
}

export default AboutPage
