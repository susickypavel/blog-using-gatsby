import React, { Fragment } from "react"
import { Global } from "@emotion/core"

import Seo from "./Seo"
import globalStyles from "@css/global-styles"
import resetStyles from "@css/reset-styles"

import ContentHolder from "./content-holder/content-holder"
import SideBar from "./main-sidebar/sidebar"

interface Props {
  title?: string
}

const PageLayout: React.FC<Props> = ({ children, title = "Blog" }) => {
  return (
    <Fragment>
      <Seo title={title} />
      <Global styles={[globalStyles, resetStyles]} />
      <ContentHolder>{children}</ContentHolder>
      <SideBar />
    </Fragment>
  )
}

export default PageLayout
