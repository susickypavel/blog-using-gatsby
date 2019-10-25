import React from "react"

import BlogPostPreview from "./blog-post-preview"
import { MdxEdge } from "@generated/graphql"
import { PageTitle } from "@css/global-styles"

interface Props {
  edges: MdxEdge[]
  header?: boolean
}

const BlogPostsList: React.FC<Props> = ({ edges, header = true }) => {
  return (
    <div>
      {header ? <PageTitle>ARTICLES [{edges.length}]</PageTitle> : null}
      {edges.map(({ node }) => (
        <BlogPostPreview node={node} key={node.id} />
      ))}
    </div>
  )
}

export default BlogPostsList
