import React from "react"
import { graphql } from "gatsby"
import * as R from "ramda"
import styled from "styled-components"
import SEO from "../components/seo"

import Layout from "../components/layout"
import { BlogGroup } from "../components/blogList"

export const TagCloudLinks = styled.p`
  font-size: 1.2em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  a {
    color: #333;
    :hover {
      color: #ff5252;
    }
  }
`

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
      <SEO title="Tag" keywords={[`bipin paul bedi`]} />
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
                  <TagCloudLinks>
                    <a href={`/${pathForPage}`} key={title}>
                      {title}
                    </a>
                  </TagCloudLinks>
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
