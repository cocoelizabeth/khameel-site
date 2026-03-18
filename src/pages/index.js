import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function HomePage({ data }) {
  const home = data.home.frontmatter
  const image = getImage(data.hero)

  return (
    <Layout>
      <section>
        <h1>{home.heroHeading}</h1>
        <p>{home.heroText}</p>
        <GatsbyImage image={image} alt="Khameel Simon headshot" />
      </section>

    </Layout>
  )
}


export const query = graphql`
  query {
    home: markdownRemark(fileAbsolutePath: { regex: "/content/pages/home.md/" }) {
      frontmatter {
        title
        heroHeading
        heroText
        heroImage
      }
    }
    hero: file(relativePath: { eq: "khameel-simon.png" }) {
      childImageSharp {
        gatsbyImageData(width: 1200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`

export function Head() {
  return (
    <Seo
      title="Night Nurse NYC & Brooklyn | Newborn Care Specialist | Khameel Simon"
      description="Expert overnight and full-time newborn care in NYC and Brooklyn. Khameel Simon is a trusted night nurse and Newborn Care Specialist helping first-time parents rest, recover, and step into parenthood with confidence."
      pathname="/"
    />
  )
}