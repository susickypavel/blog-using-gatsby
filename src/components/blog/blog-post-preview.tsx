import React from "react"

import { MdxFrontmatter } from "@generated/graphql"
import { Link } from "gatsby"

interface Props {
  frontmatter: MdxFrontmatter
  slug: string
}

const BlogPostPreview: React.FC<Props> = ({ frontmatter: { title, date }, slug }) => {
  return (
    <div>
      <h1>{title}</h1>
      <time>{date}</time>
      <Link to={slug}>Read more...</Link>
    </div>
  )
}

export default BlogPostPreview
