import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Flex, Text } from 'rebass'
import styled from 'styled-components'

import UserLinks from '../UserLinks/UserLinks'

const StyledLink = styled(Link)`
  color: black;
  padding: 5px;

  &:link,
  &:visited {
    color: black;
  }
  &:hover {
    background-color: black;
    color: white;
  }
`

class Footer extends Component {
  render() {
    const { config } = this.props

    return (
      <footer
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          padding: '10px 5px 5px',
        }}
      >
        <Flex alignItems="center" justifyContent="center" mb={20}>
          {config.visiblePages.map(page => (
            <StyledLink to={`/${page}`}>
              <Text fontFamily="mono">{page}</Text>
            </StyledLink>
          ))}
        </Flex>

        <UserLinks config={config} labeled />

        <Text fontFamily="mono" fontSize={[0]} mb={20} textAlign="center">
          <h4>{config.copyright}</h4>
        </Text>
      </footer>
    )
  }
}

export default Footer
