import React from "react"

import Avatar from "@static/avatar.jpg"

import { SidebarWrapper, SidebarAvatar, SidebarTitle, SidebarHeaderHolder } from "./sidebar-styles"
import Navigation from "./navigation/navigation"
import SocialMediaHolder from "./social-media-links/social-media-holder"

const SideBar: React.FC = () => {
  return (
    <SidebarWrapper>
      <SidebarHeaderHolder>
        <SidebarAvatar src={Avatar} />
        <SidebarTitle>Pavel Sušický</SidebarTitle>
      </SidebarHeaderHolder>
      <Navigation />
      <SocialMediaHolder />
    </SidebarWrapper>
  )
}

export default SideBar
