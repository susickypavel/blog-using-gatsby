import React from "react"
import { Global } from "@emotion/core"
import { MDXProvider } from "@mdx-js/react"

import Seo from "./Seo"
import globalStyles from "@css/global-styles"
import resetStyles from "@css/reset-styles"

import ContentHolder from "./content-holder/content-holder"
import SideBar from "./main-sidebar/sidebar"
import SiteThemeProvider from "./theme-provider/theme-provider"

import { BlockQuote, UnorderedList, OrderedList, Heading, Paragraph } from "./blog/md-components"

interface Props {
  title?: string
}

const PageLayout: React.FC<Props> = ({ children, title = "Blog" }) => {
  return (
    <MDXProvider
      components={{
        blockquote: props => <BlockQuote {...props} />,
        ul: props => <UnorderedList {...props} />,
        ol: props => <OrderedList {...props} />,
        h1: props => <Heading {...props} heading="h1" fontSize={4} />,
        h2: props => <Heading {...props} heading="h2" fontSize={3.2} />,
        h3: props => <Heading {...props} heading="h3" fontSize={2.8} />,
        h4: props => <Heading {...props} heading="h4" fontSize={2.6} />,
        h5: props => <Heading {...props} heading="h5" fontSize={2.4} />,
        h6: props => <Heading {...props} heading="h6" fontSize={2} />,
        p: props => <Paragraph {...props} />
      }}
    >
      <SiteThemeProvider>
        <Seo title={title} />
        <Global styles={[globalStyles, resetStyles]} />
        <ContentHolder>{children}</ContentHolder>
        <SideBar />
      </SiteThemeProvider>
    </MDXProvider>
  )
}

export default PageLayout
