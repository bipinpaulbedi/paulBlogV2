import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { distanceInWordsToNow } from "date-fns"
import { DiscussionEmbed } from "disqus-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = styled.div`
  text-align: left;
`

const TitleDisplay = styled.h1`
  margin-top: 0;
`

const SubTitleDisplay = styled.h2`
  font-size: 1em;
  margin: 0;
`

const DateDisplay = styled.h3`
  font-size: 0.8em;
  text-align: left;
  color: #ff5252;
  line-height: 1.5em;
`
const Seperator = styled.span`
  color: #bbb;
`

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data
  const {
    frontmatter: { title, date, pathForPage, subTitle, tags, categories },
    html,
    timeToRead,
  } = markdownRemark
  const displayDate = distanceInWordsToNow(date, {
    addSuffix: true,
  })
  const disqusShortname = "paul-blog"
  const disqusConfig = {
    url: "https://www.bipinpaulbedi.com/" + pathForPage,
    identifier: pathForPage,
    title: title,
  }
  return (
    <Layout>
      <SEO title={title} keywords={tags} />
      <TitleDisplay>
        <a href={pathForPage}>{title}</a>
      </TitleDisplay>
      <SubTitleDisplay>{subTitle}</SubTitleDisplay>
      <DateDisplay>
        {displayDate} <Seperator>|</Seperator> {timeToRead} min read{" "}
        <Seperator>|</Seperator>{" "}
        <a href={`/tagCloud/${categories}`}>{`#${categories}`}</a>{" "}
        {tags.map(ele => (
          <React.Fragment>
            <a href={`/tagCloud/${ele}`}>{`#${ele}`}</a>{" "}
          </React.Fragment>
        ))}
      </DateDisplay>
      <Post dangerouslySetInnerHTML={{ __html: html }} />
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </Layout>
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
        subTitle
        tags
        categories
      }
    }
  }
`
