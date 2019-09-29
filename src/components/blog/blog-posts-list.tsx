import React from "react"

import BlogPostPreview from "./blog-post-preview"
import { MdxEdge } from "@generated/graphql"
import { BlogPostListTitle } from "./blog-styles"

interface Props {
  edges: MdxEdge[]
}

const BlogPostsList: React.FC<Props> = ({ edges }) => {
  return (
    <div>
      <BlogPostListTitle>ARTICLES [{edges.length}]</BlogPostListTitle>
      {edges.map(({ node }) => (
        <BlogPostPreview node={node} key={node.id} />
      ))}
    </div>
  )
}

export default BlogPostsList
