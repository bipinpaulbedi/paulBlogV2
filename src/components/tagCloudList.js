import React from "react"
import { StaticQuery, graphql } from "gatsby"
import * as R from "ramda"
import styled from "styled-components"

const Tag = styled.a(props => ({
  margin: "0.3em",
  span: {
    color: "#333",
    fontSize: Math.max(20, props.sz * 8),
    ":hover": {
      color: "#ff5252",
    },
  },
}))

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

      const allTagsSorted = allTags.sort()

      const groupedCloud = R.groupBy(ele => {
        return ele
      }, allTagsSorted)

      return Object.keys(groupedCloud).map(ele => {
        return (
          <Tag
            key={ele}
            href={`/tagCloud/${ele}`}
            sz={groupedCloud[ele].length}
          >
            <span>{ele}</span>
            {` {${groupedCloud[ele].length}}`}
          </Tag>
        )
      })
    }}
  />
)

export default TagCloudList
