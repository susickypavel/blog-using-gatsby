import React from "react"

import { PageTitle } from "@css/global-styles"
import PageLayout from "@components/PageLayout"
import {
  BlockParagraph,
  AboutPageBody,
  AboutPageBodyImageHolder,
  AboutPageImage,
  AboutPageLink
} from "@components/about-page/about-styles"

const About: React.FC = () => {
  return (
    <PageLayout title="About">
      <PageTitle>ABOUT</PageTitle>
      <AboutPageBody>
        <BlockParagraph>
          Hi, i'm Paul from Czech republic and my hobby is coding/programming.
          <br /> Especially web development around Typescript and React.
        </BlockParagraph>
        <AboutPageBodyImageHolder>
          <AboutPageLink href="https://www.typescriptlang.org/">
            <AboutPageImage
              src="/logos/typescript.png"
              width="125"
              height="125"
              alt="Visit Typescript site"
            />
          </AboutPageLink>
          <AboutPageLink href="https://reactjs.org/">
            <AboutPageImage
              src="/logos/react.png"
              width="125"
              height="125"
              alt="Visit React site"
            />
          </AboutPageLink>
        </AboutPageBodyImageHolder>
        <BlockParagraph>
          When i'm not writing code, i'm probably doing calisthenics/fitness, watching Netflix or
          playing some computers games.
        </BlockParagraph>
      </AboutPageBody>
    </PageLayout>
  )
}

export default About
