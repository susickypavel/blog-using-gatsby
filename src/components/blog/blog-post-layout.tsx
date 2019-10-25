import React from "react"
import { graphql } from "gatsby"
// TODO: Do not have typings
// @ts-ignore
import { MDXRenderer } from "gatsby-plugin-mdx"

import PageLayout from "@components/PageLayout"

import { BlogPostTitle, BlogContentHolder, TagsHolder } from "./blog-styles"
import Tag from "./tag"

const PageTemplate: React.FC<any> = ({ data: { mdx } }) => {
  return (
    <PageLayout title={mdx.frontmatter.title}>
      <BlogPostTitle>{mdx.frontmatter.title}</BlogPostTitle>
      {mdx.frontmatter.tags && (
        <TagsHolder>
          {mdx.frontmatter.tags.map((tag: string) => (
            <Tag name={tag} key={tag} />
          ))}
        </TagsHolder>
      )}
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
        tags
      }
    }
  }
`

export default PageTemplate
