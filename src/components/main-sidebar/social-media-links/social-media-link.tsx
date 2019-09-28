import React from "react"

import { SOCIALMEDIALINKS_SIZE } from "@css/constants"

import { SocialMediaLinkWrapper } from "./social-media-styles"

interface Props {
  link: SocialMediaLinkProperties
}

export interface SocialMediaLinkProperties {
  name: string
  url: string
  icon: JSX.Element
}

const SocialMediaLink: React.FC<Props> = ({ link: { icon, url } }) => {
  return (
    <SocialMediaLinkWrapper href={url}>
      {React.cloneElement(icon, {
        size: SOCIALMEDIALINKS_SIZE
      })}
    </SocialMediaLinkWrapper>
  )
}

export default SocialMediaLink
