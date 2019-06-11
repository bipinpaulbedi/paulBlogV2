import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexPageBlogList from "../components/blogList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`bipin paul bedi`]} />
    <IndexPageBlogList />
  </Layout>
)

export default IndexPage
