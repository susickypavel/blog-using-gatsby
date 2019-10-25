import styled from "@utils/styled"
import { Link } from "gatsby"
import {
  LAYOUT_MEDIA_QUERY_BP,
  BLOG_HOLDER_PADDING,
  BLOG_HOLDER_PADDING_SMALL
} from "@css/constants"
import { PageTitle } from "@css/global-styles"

export const BlogPostTitle = styled(PageTitle)`
  font-size: 3.2rem;
  text-align: center;

  padding: 24px;

  @media (max-width: ${LAYOUT_MEDIA_QUERY_BP}) {
    padding: 16px;
  }

  @media (max-width: 425px) {
    font-size: 1.6rem;
  }
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

export const TagsHolder = styled.div`
  text-align: left;
  margin: 0px 24px 24px 24px;

  @media (max-width: ${LAYOUT_MEDIA_QUERY_BP}) {
    margin: 0 16px 16px 16px;
  }
`
// TODO: Extract to constants
export const TagWrapper = styled(Link)<{
  colors: {
    background: string
    foreground: string
  }
}>`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px rgba(0, 0, 0, 0.25);
  background-color: ${props => props.colors.background};
  color: ${props => props.colors.foreground};
  display: inline-block;
  border-radius: 4px;
  padding: 8px 12px;
  margin: 3px;
  font-size: 1.4rem;
  font-weight: bold;
  text-decoration: none;
`

export const BlogContentHolder = styled.div`
  padding: ${BLOG_HOLDER_PADDING};
  padding-top: 0 !important;
  font-size: 2rem;

  @media only screen and (max-width: ${LAYOUT_MEDIA_QUERY_BP}) {
    padding: ${BLOG_HOLDER_PADDING_SMALL};
  }

  & *:first-child {
    margin-top: 0 !important;
  }

  & a {
    color: ${props => props.theme.color.links};
  }

  @media (max-width: 425px) {
    font-size: 1.6rem;
  }
`

export const BlogTagsPageTitle = styled.h1`
  text-align: center;
  margin: 16px 0;
`

export const BlogTagsGoBack = styled(Link)`
  display: block;
  margin: 0 auto;
  width: 100px;
  text-align: center;
  color: ${props => props.theme.color.links};
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 16px;
`
