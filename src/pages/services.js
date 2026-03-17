import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function ServicesPage({ data }) {
  const services = data.services.frontmatter.servicesList || []

  return (
    <Layout>
      <h1>Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.title}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    services: markdownRemark(fileAbsolutePath: { regex: "/content/pages/services.md/" }) {
      frontmatter {
        servicesList {
          title
          description
        }
      }
    }
  }
`

export function Head() {
  return (
    <Seo
      title="Services"
      description="Explore Khameel Simon’s overnight newborn care, full-time support, and registry consultation services."
      pathname="/services"
    />
  )
}