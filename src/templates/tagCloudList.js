import React from "react"
import { graphql } from "gatsby"
import * as R from "ramda"

import Layout from "../components/layout"
import { BlogGroup, HomeContentLinks } from "../components/blogList"

export default function TagCloudTemplate({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const groupedPosts = R.groupBy(ele => {
    return ele.node.frontmatter.year
  }, edges)

  const elems = Object.keys(groupedPosts)
    .sort()
    .reverse()

  return (
    <Layout>
      {elems.map(ele => {
        return (
          <React.Fragment>
            <BlogGroup>{ele}</BlogGroup>
            {groupedPosts[ele].map(
              ({
                node: {
                  frontmatter: { title, pathForPage },
                },
              }) => {
                return (
                  <HomeContentLinks>
                    <a href={`/${pathForPage}`} key={title}>
                      {title}
                    </a>
                  </HomeContentLinks>
                )
              }
            )}
          </React.Fragment>
        )
      })}
    </Layout>
  )
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
            tags
          }
        }
      }
    }
  }
`
