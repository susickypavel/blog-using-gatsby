import React from "react"
import { graphql } from "gatsby"
// TODO: Do not have typings
// @ts-ignore
import { MDXRenderer } from "gatsby-plugin-mdx"

import PageLayout from "@components/PageLayout"
import { BlogPostListTitle, BlogContentHolder } from "./blog-styles"

const PageTemplate: React.FC<any> = ({ data: { mdx } }) => {
  return (
    <PageLayout title={mdx.frontmatter.title}>
      <BlogPostListTitle>{mdx.frontmatter.title}</BlogPostListTitle>
      <BlogContentHolder>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </BlogContentHolder>
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
