import React from "react"
import { Helmet as Head } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import { Query } from "@generated/graphql.d"

interface Props {
  title: string
  customMetadata?: Partial<CustomMetaData>
}

interface CustomMetaData {
  customTitle: string
  customDescription: string
  customType: "website" | "article"
}

const Seo: React.FC<Props> = ({
  title,
  customMetadata: { customTitle, customDescription, customType = "website" } = {} as CustomMetaData
}) => {
  const {
    site: {
      siteMetadata: { description, twitter }
    }
  } = useStaticQuery<Query>(graphql`
    query MyQuery {
      site {
        siteMetadata {
          description
          twitter
        }
      }
    }
  `)

  return (
    <Head titleTemplate="%s | Paul from Czech" htmlAttributes={{ lang: "en" }}>
      <title>{customTitle || title}</title>
      <meta name="description" content={customDescription || description} />

      <meta property="og:type" content={customType} />
      <meta property="og:title" content={customTitle || title} />
      <meta property="og:description" content={customDescription || description} />
      <meta property="og:image" content={`${process.env.SITE_URL}/seo-temp.png`} />

      <meta name="twitter:image" content={`${process.env.SITE_URL}/seo-temp.png`} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={customTitle || title} />
      <meta name="twitter:description" content={customDescription || description} />
    </Head>
  )
}

export default Seo
