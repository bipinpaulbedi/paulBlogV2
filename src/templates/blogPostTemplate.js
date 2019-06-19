import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { distanceInWordsToNow } from "date-fns"

const Post = styled.div`
  text-align: left;
`
const DateDisplay = styled.h2`
  font-size: 0.8em;
  text-align: left;
`

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data

  if (!markdownRemark) return null
  const {
    frontmatter: { title, date, pathForPage },
    html,
    timeToRead,
  } = markdownRemark
  const displayDate = distanceInWordsToNow(date, {
    addSuffix: true,
  })
  return (
    <div>
      <h1>
        <a href={pathForPage}>{title}</a>
      </h1>
      <DateDisplay>
        {displayDate} | {timeToRead} min read
      </DateDisplay>
      <Post dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const pageQuery = graphql`
  query BlogTemplateQuery($pathForPage: String!) {
    markdownRemark(frontmatter: { pathForPage: { eq: $pathForPage } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        pathForPage
        title
      }
    }
  }
`
