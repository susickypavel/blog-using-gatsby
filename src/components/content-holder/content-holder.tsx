import React from "react"

import { ContentWrapper } from "./content-styles"

const ContentHolder: React.FC = ({ children }) => {
  return <ContentWrapper>{children}</ContentWrapper>
}

export default ContentHolder
