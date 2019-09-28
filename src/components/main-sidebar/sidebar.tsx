import React from "react"

import Avatar from "@static/avatar.jpg"

import { SidebarWrapper, SidebarAvatar, SidebarTitle } from "./sidebar-styles"
import Navigation from "./navigation/navigation"
import SocialMediaHolder from "./social-media-links/social-media-holder"

const SideBar: React.FC = () => {
  return (
    <SidebarWrapper>
      <SidebarAvatar src={Avatar} />
      <SidebarTitle>Pavel Sušický</SidebarTitle>
      <Navigation />
      <SocialMediaHolder />
    </SidebarWrapper>
  )
}

export default SideBar
