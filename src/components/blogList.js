import React from "react"
import { StaticQuery, graphql } from "gatsby"
import * as R from "ramda"
import styled from "styled-components"

const BlogGroup = styled.div`
  font-size: 2em;
  color: #bbb;
`

const HomeContentLinks = styled.p`
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

const IndexPageBlogList = () => (
  <StaticQuery
    query={graphql`
      query IndexPageBlogListQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                year: date(formatString: "YYYY")
                title
                path
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges } }) => {
      const groupedPosts = R.groupBy(ele => {
        return ele.node.frontmatter.year
      }, edges)

      const elems = Object.keys(groupedPosts)
        .sort()
        .reverse()

      return elems.map(ele => {
        return (
          <React.Fragment>
            <BlogGroup>{ele}</BlogGroup>
            {groupedPosts[ele].map(
              ({
                node: {
                  frontmatter: { title, path },
                },
              }) => {
                return (
                  <HomeContentLinks>
                    <a href="/" key={title}>
                      {title}
                    </a>
                  </HomeContentLinks>
                )
              }
            )}
          </React.Fragment>
        )
      })
    }}
  />
)

export default IndexPageBlogList
