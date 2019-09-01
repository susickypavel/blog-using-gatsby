import React, { Fragment } from "react"

import Seo from "./Seo"

interface Props {
  title?: string
}

const PageLayout: React.FC<Props> = ({ children, title = "Home" }) => {
  return (
    <Fragment>
      <Seo title={title} />
      {children}
    </Fragment>
  )
}

export default PageLayout
