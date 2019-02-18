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
          style={{ minHeight: 'calc(100vh - 140px)' }}
        >
          <Box mt={80}>
            <Heading fontFamily="mono" mb={20} mx={20} textAlign="center">
              {config.userDescription}
            </Heading>

            {config.userSubdescription.map(sub => (
              <Text fontFamily="mono" mt={10} mx={10} textAlign="center">
                {sub}
              </Text>
            ))}
          </Box>
        </Flex>
      </Layout>
    )
  }
}

export default Index
