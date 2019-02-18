import React from 'react'
import { Link, Text } from 'rebass'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledLink = styled(Link)`
  color: ${props => (props.color !== undefined ? props.color : '#ad774e')};

  &:link,
  &:visited {
    color: ${props => (props.color !== undefined ? props.color : '#ad774e')};
  }
  &:hover {
    background-color: ${props => (props.color !== undefined ? props.color : '#ad774e')};
    color: ${props => (props.altColor !== undefined ? props.altColor : white)};
    padding: ${props => (props.icon !== undefined ? '0px' : '2px')};
  }
`

const ExternalLink = ({ altColor, color, icon, style, title, url }) => (
  <StyledLink
    altColor={altColor}
    color={color}
    href={`/${url}`}
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
