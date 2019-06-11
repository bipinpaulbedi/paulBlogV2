import React from "react"
import { StaticQuery, graphql } from "gatsby"
import * as R from "ramda"

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
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges } }) => {
      const groupedPosts = R.groupBy(ele => {
        return ele.node.frontmatter.year
      }, edges);

      const elems = Object.keys(groupedPosts)
        .sort()
        .reverse();

      elems.map(ele => {
        return (
          <React.Fragment>
            <div>{ele}</div>
            {groupedPosts[ele].map(
              ({
                node: {
                  frontmatter: { date, year, title },
                },
              }) => {
               return ( <div>{title}</div> );
              }
            )}
          </React.Fragment>
        )
      })
    }}
  />
)

export default IndexPageBlogList
