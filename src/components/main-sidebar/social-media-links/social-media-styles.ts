import styled from "@utils/styled"
import { SOCIALMEDIALINKS_HOVER_AND_FOCUS_OPACITY } from "@css/constants"

export const SocialMediaHolderWrapper = styled.div`
  width: 100%;
  text-align: center;
`

export const SocialMediaLinkWrapper = styled.a`
  margin: 0 4px;
  color: ${props => props.theme.color.primary};

  &:hover,
  &:focus {
    opacity: ${SOCIALMEDIALINKS_HOVER_AND_FOCUS_OPACITY};
  }

  transition: opacity 0.1s linear;
`
