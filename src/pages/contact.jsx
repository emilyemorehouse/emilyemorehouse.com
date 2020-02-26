import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Box, Card, Flex, Heading, Text } from 'rebass'

import SEO from '../components/SEO/SEO'
import Layout from '../layout'
import config from '../../data/SiteConfig'

const ListItem = ({
    eventName,
    onClick,
  }) => (
    <Card
      bg='rgba(142, 249, 243, 0.8)'
      borderColor="black"
      border={2}
      my={3}
      onClick={onClick}
      p={3}
      style={{'cursor': 'pointer'}}
    >
      <Heading fontSize={[2, 3, 4]} fontFamily="mono">
        {eventName}
      </Heading>
    </Card>
)

const sendEmail = (cta) => {
  console.log(cta)
  let subject = null
  switch (cta) {
    case 'ask':
      subject = '[Question] emilyemorehouse.com'
      break
    
      case 'schedule':
      subject = '[Schedule Consult] emilyemorehouse.com'
      break
    
      case 'hello':
      subject = '[👋 Hello] emilyemorehouse.com'
      break
    
      default:
      subject = '[Inquiry] emilyemorehouse.com'
      break
  }

  window.location = `mailto:e.morehouse@cuttlesoft.com?subject=${subject}`;
}

class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <SEO />

        <Flex
          alignItems="center"
          justifyContent="center"
          p={24}
          style={{ minHeight: 'calc(100vh - 140px)' }}
        >
          <Box mt={80}>
            <Heading mb={40} fontFamily="mono" fontSize={[5, 6]} textAlign="center">
              Contact Me
            </Heading>
            <div>
                <ListItem
                    eventName="Ask Me A Question"
                    onClick={() => sendEmail('ask')}
                />
                <ListItem
                    eventName="Schedule A Consultation"
                    onClick={() => sendEmail('schedule')}
                />
                <ListItem
                    eventName="Say Hello!"
                    onClick={() => sendEmail('hello')}
                />
            </div>
          </Box>
        </Flex>
      </Layout>
    )
  }
}

export default ContactPage
