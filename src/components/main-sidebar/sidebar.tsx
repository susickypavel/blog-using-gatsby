import React from "react"

import Avatar from "@static/avatar.jpg"

import { SidebarWrapper, SidebarAvatar, SidebarTitle } from "./sidebar-styles"

const SideBar: React.FC = () => {
  return (
    <SidebarWrapper>
      <SidebarAvatar src={Avatar} />
      <SidebarTitle>Pavel Sušický</SidebarTitle>
    </SidebarWrapper>
  )
}

export default SideBar
