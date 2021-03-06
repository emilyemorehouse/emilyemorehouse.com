import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import styled from 'styled-components'

import './UserLinks.css'

const StyledLink = styled(OutboundLink)`
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

class UserLinks extends Component {
  getLinkElements() {
    const { config } = this.props
    const { userLinks } = config

    return userLinks.map(link => (
      <StyledLink key={link.label} href={link.url} target="_blank">
        <FontAwesomeIcon icon={link.iconClassName} />
      </StyledLink>
    ))
  }

  render() {
    const { userLinks } = this.props.config
    if (!userLinks) {
      return null
    }
    return <div className="user-links">{this.getLinkElements()}</div>
  }
}

export default UserLinks
