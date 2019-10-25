import styled from "@utils/styled"
import { css } from "@emotion/core"

import { LAYOUT_MEDIA_QUERY_BP } from "./constants"

export const PageTitle = styled.h2`
  font-size: 3.2rem;
  text-align: center;

  padding: 24px;

  @media (max-width: ${LAYOUT_MEDIA_QUERY_BP}) {
    padding: 16px;
  }

  @media (max-width: 425px) {
    font-size: 2.8rem;
  }
`

export default css`
  * {
    box-sizing: border-box;
  }

  html {
    overflow: auto;
    font-size: 62.5%;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    min-height: 100%;
  }

  #___gatsby {
    color: #fff;
  }

  #gatsby-focus-wrapper {
    display: flex;
    @media screen and (max-width: ${LAYOUT_MEDIA_QUERY_BP}) {
      flex-flow: column-reverse;
    }
  }

  .activeLink {
    font-weight: bold;
  }

  /* Code line numbering */
  .gatsby-highlight {
    background-color: #2d2d2d;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }
  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding: 0;
    padding-left: 2.8em;
    overflow: initial;
  }
`
