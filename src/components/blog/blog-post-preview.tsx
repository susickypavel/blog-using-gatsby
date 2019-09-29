import React from "react"

import { Mdx } from "@generated/graphql"

import { BlogPostPreviewWrapper } from "./blog-styles"

interface Props {
  node: Mdx
}

const BlogPostPreview: React.FC<Props> = ({
  node: {
    frontmatter: { title },
    fields: { slug }
  }
}) => {
  return (
    <BlogPostPreviewWrapper to={slug}>
      <h3>{title}</h3>
    </BlogPostPreviewWrapper>
  )
}

export default BlogPostPreview
