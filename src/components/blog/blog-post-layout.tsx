import React from "react"
import { graphql } from "gatsby"
// TODO: Do not have typings
// @ts-ignore
import { MDXRenderer } from "gatsby-plugin-mdx"

import PageLayout from "@components/PageLayout"

const PageTemplate: React.FC<any> = ({ data: { mdx } }) => {
  return (
    <PageLayout title={mdx.frontmatter.title}>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </PageLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default PageTemplate
