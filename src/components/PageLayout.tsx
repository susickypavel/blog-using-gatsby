import React, { Fragment } from "react"
import { Global } from "@emotion/core"

import Seo from "./Seo"
import globalStyles from "@css/global-styles"
import resetStyles from "@css/reset-styles"
import NavigationBar from "./navigation-bar/navigation-bar"

interface Props {
  title?: string
}

const PageLayout: React.FC<Props> = ({ children, title = "Blog" }) => {
  return (
    <Fragment>
      <Seo title={title} />
      <Global styles={[globalStyles, resetStyles]} />
      <NavigationBar />
      {children}
    </Fragment>
  )
}

export default PageLayout
