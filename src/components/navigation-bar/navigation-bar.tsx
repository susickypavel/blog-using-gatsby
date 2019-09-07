import React from "react"

import NavigationHolder from "./navigation-holder"
import NavigationBarItem, { NavigationLinkProps } from "./navigation-bar-item"
import NavigationBarItemsHolder from "./navigation-bar-items-holder"

import Splitter from "@components/Splitter"

import { FiHome, FiUser } from "react-icons/fi"

const NavigationBar: React.FC = () => {
  const links: NavigationLinkProps[] = [
    { name: "home", path: "/", Icon: FiHome },
    { name: "about", path: "/about", Icon: FiUser }
  ]

  return (
    <NavigationHolder navigationItemsCount={links.length}>
      <NavigationBarItemsHolder navigationItemsCount={links.length}>
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
