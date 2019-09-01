import React from "react"
import { Helmet as Head } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import { Query } from "@generated/graphql.d"

interface Props {
  title: string
}

const Seo: React.FC<Props> = ({ title }) => {
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
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:description" content={description} />

      {/* <meta name="twitter:image" content={`${process.env.BASE_URL}StrangerThings.jpg`} /> TODO */}
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  )
}

export default Seo
