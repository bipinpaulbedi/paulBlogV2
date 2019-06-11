import React from "react"
import styled from "styled-components"

const TopMenu = styled.div`
    text-transform: uppercase;
    a {
        margin: 1em;
        color: #333;
        font-family: "Lora", "Georgia", "Palatino", "Helvetica";
        font-size: .9em;
        :hover {
            color: #ff5252;
        }
    }
}`

const Menu = () => (
  <TopMenu>
    <a href="/">Home</a>
    <a href="/">Tags</a>
    <a href="/">About</a>
    <a href="/">Contact</a>
  </TopMenu>
)

export default Menu
