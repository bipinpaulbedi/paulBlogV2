import React from "react"
import { graphql } from "gatsby"

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data;
  const {
    frontmatter: { title, date },
    html,
  } = markdownRemark
  return (
    <div>
      <h1>{title}</h1>
      <h2>{date}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const pageQuery = graphql`
  query BlogTemplateQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
