import { css } from "@emotion/core"

import { PRIMARY_COLOR } from "./constants"

export default css`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  #___gatsby {
    background-color: ${PRIMARY_COLOR};
    color: #fff;
  }
`
