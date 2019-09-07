import styled from "@emotion/styled"
import { NAVIGATIONBARITEM_WIDTH } from "@css/constants"

interface Props {
  navigationItemsCount: number
}

export default styled.div<Props>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ navigationItemsCount }) =>
      navigationItemsCount * NAVIGATIONBARITEM_WIDTH}px) {
    flex-flow: column wrap;
  }
`
