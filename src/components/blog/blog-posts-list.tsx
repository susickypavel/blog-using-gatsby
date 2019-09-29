import React from "react"

import BlogPostPreview from "./blog-post-preview"
import { MdxEdge } from "@generated/graphql"

interface Props {
  edges: MdxEdge[]
}

const BlogPostsList: React.FC<Props> = ({ edges }) => {
  return (
    <div>
      {edges.map(({ node: { frontmatter, fields: { slug } } }) => (
        <BlogPostPreview frontmatter={frontmatter} slug={slug} key={frontmatter.title} />
      ))}
    </div>
  )
}

export default BlogPostsList
