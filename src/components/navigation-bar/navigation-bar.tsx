import React from "react"

import NavigationHolder from "./navigation-holder"
import NavigationBarItem, { NavigationLinkProps } from "./navigation-bar-item"
import NavigationBarItemsHolder from "./navigation-bar-items-holder"

import Splitter from "@components/Splitter"

const NavigationBar: React.FC = () => {
  const links: NavigationLinkProps[] = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" }
  ]

  return (
    <NavigationHolder>
      <NavigationBarItemsHolder>
        <Splitter />
        {links.map(link => (
          <NavigationBarItem key={link.name} link={link} />
        ))}
        <Splitter />
      </NavigationBarItemsHolder>
    </NavigationHolder>
  )
}

export default NavigationBar
