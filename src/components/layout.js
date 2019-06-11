/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"

const Main = styled.div`
  margin: auto;
  max-width: 700px;
  width: 90%;
  text-align: center;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}
    render={data => (
      <Main>
        <Header siteMetadata={data.site.siteMetadata} />
        <hr/>
        {children}
        <footer>
          © {new Date().getFullYear()}, {data.site.siteMetadata.author}
          {` `}
          All rights reserved.
        </footer>
      </Main>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
