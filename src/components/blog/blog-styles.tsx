import styled from "@utils/styled"
import { Link } from "gatsby"

export const BlogPostListTitle = styled.h2`
  text-align: center;
  padding: 24px;
  /* border-bottom: 1px solid red; */

  font-size: 3.2rem;
`

export const BlogPostPreviewWrapper = styled(Link)`
  display: block;
  text-decoration: none;
  text-align: center;

  padding: 8px 16px;
  color: ${props => props.theme.color.primary};

  & h3 {
    font-size: 2rem;
    font-weight: lighter;
  }

  &:nth-of-type(even) {
  }

  &:nth-of-type(even) {
    background-color: ${props => props.theme.bg.secondary};
  }

  &:hover {
    text-decoration: underline;
  }
`
