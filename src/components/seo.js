import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Seo({ title, description, pathname }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  const metaTitle = title
    ? `${title} | ${site.siteMetadata.title}`
    : site.siteMetadata.title

  const metaDescription = description || site.siteMetadata.description
  const url = `${site.siteMetadata.siteUrl}${pathname || ""}`

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
    </>
  )
}