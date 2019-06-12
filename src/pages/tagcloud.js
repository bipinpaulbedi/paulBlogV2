import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TagCloud from "../components/tagCloudList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`bipin paul bedi`]} />
    <TagCloud />
  </Layout>
)

export default IndexPage
