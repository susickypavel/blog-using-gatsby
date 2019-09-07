import { css } from "@emotion/core"

export default css`
  * {
    box-sizing: border-box;
  }

  html {
    overflow: auto;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  .navigation-bar-active-link {
    color: red !important;
  }
`
