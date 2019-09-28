import styled from "@utils/styled"

import {
  LAYOUT_MEDIA_QUERY_BP,
  SIDEBAR_PADDING,
  SIDEBAR_TITLE_MARGINTOP,
  SIDEBAR_TITLE_FONTSIZE
} from "@css/constants"

export const SidebarWrapper = styled.div`
  flex: 1 0 39%;
  background: ${props => props.theme.bg.secondary};
  color: ${props => props.theme.color.primary};
  border-left: 1px solid black;

  padding: ${SIDEBAR_PADDING};

  display: flex;
  flex-flow: column wrap;
  align-items: center;

  @media screen and (max-width: ${LAYOUT_MEDIA_QUERY_BP}) {
    flex-grow: 0;
    border-left: none;
  }
`

export const SidebarAvatar = styled.img`
  width: 100px;
  height: auto;

  border-radius: 100%;
`

export const SidebarTitle = styled.p`
  font-size: ${SIDEBAR_TITLE_FONTSIZE};
  font-weight: bold;
  margin-top: ${SIDEBAR_TITLE_MARGINTOP};
`

export const SidebarHeaderHolder = styled.div`
  width: 100%;
  text-align: center;
`
