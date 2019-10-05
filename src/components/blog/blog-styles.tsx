import styled from "@utils/styled"
import { Link } from "gatsby"
import {
  LAYOUT_MEDIA_QUERY_BP,
  BLOG_HOLDER_PADDING,
  BLOG_HOLDER_PADDING_SMALL
} from "@css/constants"

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

export const BlogContentHolder = styled.div`
  padding: ${BLOG_HOLDER_PADDING};
  padding-top: 0 !important;
  font-size: 2rem;

  @media only screen and (max-width: ${LAYOUT_MEDIA_QUERY_BP}) {
    padding: ${BLOG_HOLDER_PADDING_SMALL};
  }

  & *:first-of-type {
    margin-top: 0 !important;
  }
`
