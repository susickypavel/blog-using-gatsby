import styled from "@utils/styled"
import { getGoldenRatio } from "@utils/golden-ratio"

import {
  LAYOUT_MEDIA_QUERY_BP,
  SIDEBAR_PADDING,
  SIDEBAR_TITLE_MARGINTOP,
  SIDEBAR_TITLE_FONTSIZE
} from "@css/constants"

export const SidebarWrapper = styled.div`
  color: ${props => props.theme.color.primary};

  width: ${getGoldenRatio(100, "B")}%;
  height: 100%;

  display: flex;
  flex-flow: column wrap;

  position: fixed;
  right: 0;

  padding: ${SIDEBAR_PADDING};
  text-align: center;

  background-color: ${props => props.theme.bg.secondary};

  @media screen and (max-width: ${LAYOUT_MEDIA_QUERY_BP}) {
    width: 100%;
    height: auto;
    position: static;
  }
`

export const SidebarAvatar = styled.img`
  width: 100px;
  height: auto;

  display: block;
  margin: 0 auto;

  border-radius: 100%;
`

export const SidebarTitle = styled.p`
  font-size: ${SIDEBAR_TITLE_FONTSIZE};
  font-weight: bold;
  margin-top: ${SIDEBAR_TITLE_MARGINTOP};
`
