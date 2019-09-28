import styled from "@utils/styled"
import { LAYOUT_MEDIA_QUERY_BP } from "@css/constants"

export const ContentWrapper = styled.div`
  flex: 1 0 61%;
  height: 100%;
  background: ${props => props.theme.bg.primary};
  color: ${props => props.theme.color.primary};

  @media screen and (max-width: ${LAYOUT_MEDIA_QUERY_BP}) {
    flex: 1 0;
  }
`
