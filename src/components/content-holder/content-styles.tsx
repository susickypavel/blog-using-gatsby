import styled from "@utils/styled"
import { getGoldenRatio } from "@utils/golden-ratio"
import { LAYOUT_MEDIA_QUERY_BP } from "@css/constants"

export const ContentWrapper = styled.div`
  width: ${getGoldenRatio(100, "A")}%;
  min-height: 100vh;
  background: ${props => props.theme.bg.primary};
  color: ${props => props.theme.color.primary};

  @media screen and (max-width: ${LAYOUT_MEDIA_QUERY_BP}) {
    width: 100%;
  }
`
