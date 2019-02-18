import React from 'react'
import { Text } from 'rebass'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledLink = styled(OutboundLink)`
  color: ${props => props.color};

  &:link,
  &:visited {
    color: ${props => props.color};
  }
  &:hover {
    background-color: ${props => props.color};
    color: ${props => props.altColor};
    padding: ${props => (props.icon ? '0px' : '2px')};
  }
`

const ExternalLink = ({ altColor, color, icon, style, title, url }) => (
  <StyledLink
    altColor={altColor || 'white'}
    color={color || '#ad774e'}
    href={`${url}`}
    icon={icon}
    style={style}
    target="_blank"
  >
    <Text
      as={icon ? 'div' : 'span'}
      fontFamily="mono"
      style={{ backgroundColor: 'inherit', color: 'inherit' }}
    >
      {title}
    </Text>
    {icon && <FontAwesomeIcon icon={icon} />}
  </StyledLink>
)

export default ExternalLink
