import React from "react"

import BlogPostPreview from "./blog-post-preview"
import { MdxEdge } from "@generated/graphql"
import { BlogPostListTitle } from "./blog-styles"

interface Props {
  edges: MdxEdge[]
  header?: boolean
}

const BlogPostsList: React.FC<Props> = ({ edges, header = true }) => {
  return (
    <div>
      {header ? <BlogPostListTitle>ARTICLES [{edges.length}]</BlogPostListTitle> : null}
      {edges.map(({ node }) => (
        <BlogPostPreview node={node} key={node.id} />
      ))}
    </div>
  )
}

export default BlogPostsList
