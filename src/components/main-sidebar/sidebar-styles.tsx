import styled from "@emotion/styled"

import {
  LAYOUT_MEDIA_QUERY_BP,
  SIDEBAR_PADDING,
  SIDEBAR_TITLE_MARGINTOP,
  SIDEBAR_TITLE_FONTSIZE
} from "@css/constants"

export const SidebarWrapper = styled.div`
  flex: 1 0 39%;

  padding: ${SIDEBAR_PADDING};

  display: flex;
  flex-flow: column wrap;
  align-items: center;

  @media screen and (max-width: ${LAYOUT_MEDIA_QUERY_BP}) {
    flex: 1 0;
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
