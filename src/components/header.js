import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Logo from "./logo"
import SocialLinks from "./socialLinks"
import Menu from "./menu"

const HeaderBlock = styled.h1`
  font-size: 1.5em;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  div {
    margin-bottom: 0;
    a p {
      font-size: 0.5em;
      color: #bbb;
    }
  }
`

const Header = ({ siteMetadata: { title, description } }) => (
  <React.Fragment>
    <HeaderBlock>
      <div>
        <Logo />
      </div>
      <div>
        <a href="/">
          {title}
          <p>{description}</p>
        </a>
      </div>
    </HeaderBlock>
    <SocialLinks />
    <Menu />
  </React.Fragment>
)

Header.propTypes = {
  siteMetadata: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
}

Header.defaultProps = {
  siteMetadata: {
    title: "title",
    description: "description",
  },
}

export default Header
