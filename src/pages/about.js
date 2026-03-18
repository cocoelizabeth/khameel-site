import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function AboutPage({ data }) {
  const about = data.about.frontmatter

  return (
    <Layout>
      <h1>{about.heading}</h1>
      <p>{about.intro}</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    about: markdownRemark(fileAbsolutePath: { regex: "/content/pages/about.md/" }) {
      frontmatter {
        title
        heading
        intro
      }
    }
  }
`

export function Head() {
  return (
    <Seo
      title="About Khameel Simon | Night Nurse & Newborn Care Specialist in Brooklyn, NYC"
      description="Learn more about Khameel Simon, a newborn care specialist serving NYC families."
      pathname="/about"
    />
  )
}