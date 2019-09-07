import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import { IconType } from "react-icons/lib/cjs"
import { NAVIGATIONBARITEM_ICON_SIZE, NAVIGATIONBARITEM_WIDTH } from "@css/constants"

interface Props {
  link: NavigationLinkProps
}

export interface NavigationLinkProps {
  path: string
  name: string
  Icon: IconType
}

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;

  font-weight: bold;

  color: white;
  padding: 8px;

  display: flex;
  flex-flow: column wrap;
  align-items: center;

  width: ${NAVIGATIONBARITEM_WIDTH}px;
`

const LinkName = styled.span`
  margin-top: 4px;
`

const NavigationBarItem: React.FC<Props> = ({ link: { name, path, Icon } }) => {
  return (
    <StyledLink activeClassName="navigation-bar-active-link" to={path}>
      <Icon size={NAVIGATIONBARITEM_ICON_SIZE} />
      <LinkName>{name}</LinkName>
    </StyledLink>
  )
}

export default NavigationBarItem
