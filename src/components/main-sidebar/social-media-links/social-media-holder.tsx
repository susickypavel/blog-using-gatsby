import React from "react"

import TwitterIcon from "mdi-react/TwitterIcon"
import GithubIcon from "mdi-react/GithubCircleIcon"

import SocialMediaLink, { SocialMediaLinkProperties } from "./social-media-link"
import { SocialMediaHolderWrapper } from "./social-media-styles"

const SocialMediaHolder: React.FC = () => {
  const links: SocialMediaLinkProperties[] = [
    {
      icon: <TwitterIcon />,
      name: "Twitter",
      url: "https://twitter.com/Thesoreon"
    },
    {
      icon: <GithubIcon />,
      name: "Github",
      url: "https://github.com/Thesoreon"
    }
  ]

  return (
    <SocialMediaHolderWrapper>
      {links.map(link => (
        <SocialMediaLink link={link} key={link.name} />
      ))}
    </SocialMediaHolderWrapper>
  )
}

export default SocialMediaHolder
