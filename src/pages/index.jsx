import React from 'react'
import Helmet from 'react-helmet'
import { Box, Heading, Flex, Text } from 'rebass'

import Layout from '../layout'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />

        <Flex
          alignItems="center"
          justifyContent="center"
          style={{ height: 'calc(100vh - 140px)' }}
        >
          <Box>
            <Heading fontFamily="mono" style={{ width: '80vw', maxWidth: 600 }} textAlign="center">
              {config.userDescription}
            </Heading>

            <Text
              fontFamily="mono"
              mt={30}
              style={{ width: '80vw', maxWidth: 600 }}
              textAlign="center"
            >
              {config.userSubdescription}
            </Text>
          </Box>
        </Flex>
      </Layout>
    )
  }
}

export default Index
