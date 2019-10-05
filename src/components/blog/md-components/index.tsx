import React from "react"
import styled from "@utils/styled"
import {
  BLOCKQUOTE_PADDING,
  BLOCKQUOTE_MARGIN,
  BLOCKQUOTE_BORDERRADIUS,
  BLOCKQUOTE_FONTSIZE
} from "@css/constants"

const BlockQuoteWrapper = styled.blockquote`
  background: ${props => props.theme.bg.secondary};
  padding: ${BLOCKQUOTE_PADDING};
  margin: ${BLOCKQUOTE_MARGIN};
  border-radius: ${BLOCKQUOTE_BORDERRADIUS};
  font-size: ${BLOCKQUOTE_FONTSIZE};

  border-left: 4px solid ${props => props.theme.color.primary};

  & p {
    margin: 0;
  }
`

export const UnorderedList = styled.ul`
  list-style-type: inherit;
  padding-left: 20px;
  margin-top: 8px;
  margin-left: 16px;

  & li {
    margin: 2px 0;
  }
`

export const OrderedList = styled.ol`
  list-style-type: decimal;
  padding-left: 20px;
  margin-top: 8px;
  margin-left: 16px;

  & li {
    margin: 2px 0;
  }
`

export const Heading: React.FC<{
  heading: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  fontSize: number
}> = ({ heading, fontSize, children }) => {
  const HeadingComponent = styled(heading)`
    font-size: ${fontSize}rem;
    margin: 32px 0;
  `

  return <HeadingComponent>{children}</HeadingComponent>
}

export const BlockQuote: React.FC = ({ children }) => {
  return (
    <BlockQuoteWrapper>
      <p>{children}</p>
    </BlockQuoteWrapper>
  )
}

export const Paragraph = styled.p`
  line-height: 28px;
  margin: 8px 0;
`
