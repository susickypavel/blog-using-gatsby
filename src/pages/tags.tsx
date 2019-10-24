import React from "react"
import { graphql } from "gatsby"

import { Query } from "@generated/graphql.d"
import PageLayout from "@components/PageLayout"
import Tag from "@components/blog/tag"
import BlogPostsList from "@components/blog/blog-posts-list"
import { BlogTagsPageTitle, BlogTagsGoBack } from "@components/blog/blog-styles"

interface Props {
  location: {
    state: { tag: string }
  }
  data: Query
}

const Tags: React.FC<Props> = ({
  data: {
    allMdx: { edges }
  },
  location
}) => {
  if (!location.state || !location.state.tag) {
    return (
      <PageLayout title="Tags">
        <BlogTagsPageTitle>Select tag to see posts!</BlogTagsPageTitle>
        <Tag name="javascript" />
        <Tag name="react" />
        <Tag name="typescript" />
      </PageLayout>
    )
  }

  const filteredPosts = edges.filter(edge =>
    edge.node.frontmatter.tags.includes(location.state.tag)
  )

  return (
    <PageLayout title={`Tag ${location.state.tag}`}>
      <BlogTagsPageTitle>
        Searched tag: <Tag name={location.state.tag} />{" "}
      </BlogTagsPageTitle>
      <BlogTagsGoBack to="/tags">GOBACK</BlogTagsGoBack>
      <BlogPostsList edges={filteredPosts} header={false} />
    </PageLayout>
  )
}

export const PageQuery = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Tags
