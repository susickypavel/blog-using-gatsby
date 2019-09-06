import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

interface Props {
  link: NavigationLinkProps
}

export interface NavigationLinkProps {
  path: string
  name: string
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 8px;
`

const NavigationBarItem: React.FC<Props> = ({ link: { name, path } }) => {
  return (
    <StyledLink activeClassName="navigation-bar-active-link" to={path}>
      {name}
    </StyledLink>
  )
}

export default NavigationBarItem
