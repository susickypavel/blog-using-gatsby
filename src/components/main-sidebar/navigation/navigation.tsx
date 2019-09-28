import React from "react"
import { Link } from "gatsby"

import { NavigationWrapper, NavigationLink } from "./navigation-styles"

const Navigation: React.FC = () => {
  const links = [
    { path: "/", name: "HOME" },
    { path: "/about", name: "ABOUT" },
    { path: "/blog", name: "BLOG" }
  ]

  return (
    <NavigationWrapper>
      <ul>
        {links.map(({ name, path }) => {
          return (
            <NavigationLink key={name}>
              <Link to={path} activeClassName="activeLink">
                {name}
              </Link>
            </NavigationLink>
          )
        })}
      </ul>
    </NavigationWrapper>
  )
}

export default Navigation
