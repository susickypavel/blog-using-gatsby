import styled from "@emotion/styled"

import { PRIMARY_COLOR, NAVIGATIONBAR_HEIGHT, NAVIGATIONBARITEM_WIDTH } from "@css/constants"

interface Props {
  navigationItemsCount: number
}

export default styled.nav<Props>`
  background-color: ${PRIMARY_COLOR};
  height: ${NAVIGATIONBAR_HEIGHT};

  @media (max-width: ${({ navigationItemsCount }) =>
      navigationItemsCount * NAVIGATIONBARITEM_WIDTH}px) {
    height: auto;
  }
`
