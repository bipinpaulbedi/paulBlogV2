import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function TagCloudTemplate({ data }) {
  return <Layout />
}

export const pageQuery = graphql`
  query TagCloudTemplateQuery($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            year: date(formatString: "YYYY")
            title
            pathForPage
          }
        }
      }
    }
  }
`
