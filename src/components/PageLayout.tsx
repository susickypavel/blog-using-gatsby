import React from "react"
import { Global } from "@emotion/core"

import Seo from "./Seo"
import globalStyles from "@css/global-styles"
import resetStyles from "@css/reset-styles"

import ContentHolder from "./content-holder/content-holder"
import SideBar from "./main-sidebar/sidebar"
import SiteThemeProvider from "./theme-provider/theme-provider"

interface Props {
  title?: string
}

const PageLayout: React.FC<Props> = ({ children, title = "Blog" }) => {
  return (
    <SiteThemeProvider>
      <Seo title={title} />
      <Global styles={[globalStyles, resetStyles]} />
      <ContentHolder>{children}</ContentHolder>
      <SideBar />
    </SiteThemeProvider>
  )
}

export default PageLayout
