import React from "react"
import { graphql } from "gatsby"

import PageLayout from "@components/PageLayout"
import BlogPostsList from "@components/blog/blog-posts-list"
import { MdxGroupConnection } from "@generated/graphql"

interface Props {
  data: {
    allMdx: MdxGroupConnection
  }
}

const Blog: React.FC<Props> = ({
  data: {
    allMdx: { edges }
  }
}) => {
  return (
    <PageLayout>
      <BlogPostsList edges={edges} />
    </PageLayout>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Blog
