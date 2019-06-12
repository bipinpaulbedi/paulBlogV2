import React from "react"
import { StaticQuery, graphql } from "gatsby"
import * as R from "ramda"
import styled from "styled-components"

const Tag = styled.a`
    margin: .5em
`

const TagCloudList = () => (
  <StaticQuery
    query={graphql`
      query TagCloudListQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges } }) => {
      const allTags = []
      R.forEach(ele => {
        allTags.push(...ele.node.frontmatter.tags)
      }, edges)

      const allTagsSorted = allTags.sort();
      
      const groupedCloud = R.groupBy(ele => {
        return ele
      }, allTagsSorted)

      return Object.keys(groupedCloud).map(ele => {
        return (
          <Tag key={ele} href="/">
            {ele} ({groupedCloud[ele].length})
          </Tag>
        )
      })
    }}
  />
)

export default TagCloudList
