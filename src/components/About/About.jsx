import React, { Component } from 'react'
import { Box, Flex, Text } from 'rebass'
import ExternalLink from '../../components/ExternalLink/ExternalLink'

class About extends Component {
  render() {
    return (
      <Flex alignItems="center" justifyContent="center">
        <Box>
          <Text
            fontFamily="mono"
            mt={30}
            style={{ width: '80vw', maxWidth: 600 }}
            textAlign="center"
          >
            I'm located in Denver, CO as the Cofounder and Director of Engineering at{' '}
            <ExternalLink url="https://www.cuttlesoft.com" title="Cuttlesoft" />, a software
            development company focused on building beauifully designed, highly scalable custom
            software. I'm also a Python Core Developer and help maintain{' '}
            <ExternalLink url="https://www.github.com/axios/axios" title="Axios" />
          </Text>

          <Text
            fontFamily="mono"
            mt={30}
            style={{ width: '80vw', maxWidth: 600 }}
            textAlign="center"
          >
            I graduated in the summer of 2014 from Florida State University with degrees in
            Theatre, Criminology, and Computer Science as well as minoring in Mathematics and
            Psychology (yeah, I was a little busy). Since then I've dabbled in graduate level
            courses and dove into open source contributing while deepening my level of experience
            with programming and running a business.
          </Text>

          <Text
            fontFamily="mono"
            mt={30}
            style={{ width: '80vw', maxWidth: 600 }}
            textAlign="center"
          >
            I'm interested in pursuing further research in the realm of programming language
            theory, particularly formal verification and parallelization, as well as application
            development with OSS.
          </Text>
        </Box>
      </Flex>
    )
  }
}

export default About
