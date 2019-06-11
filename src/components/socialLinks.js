import React from "react"
import styled from "styled-components"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaGithubSquare,
  FaLinkedin,
  FaYoutube,
  FaDocker,
  FaStackOverflow,
  FaCoffee,
  FaCcPaypal,
  FaCcStripe,
  FaRssSquare,
} from "react-icons/fa"

const SocialLink = styled.div`
    font-size: 1.5em;
    word-spacing: .4em;
}`

const SocialLinks = () => (
  <SocialLink>
    <a href="/">
      {" "}
      <FaFacebookSquare />{" "}
    </a>
    <a href="/">
      {" "}
      <FaTwitterSquare />
    </a>
    <a href="/">
      {" "}
      <FaInstagram />
    </a>
    <a href="/">
      {" "}
      <FaGithubSquare />
    </a>
    <a href="/">
      {" "}
      <FaLinkedin />
    </a>
    <a href="/">
      {" "}
      <FaYoutube />
    </a>
    <a href="/">
      {" "}
      <FaDocker />
    </a>
    <a href="/">
      {" "}
      <FaStackOverflow />
    </a>
    <a href="/">
      {" "}
      <FaCoffee />
    </a>
    <a href="/">
      {" "}
      <FaCcPaypal />
    </a>
    <a href="/">
      {" "}
      <FaCcStripe />
    </a>
    <a href="/">
      {" "}
      <FaRssSquare />
    </a>
  </SocialLink>
)

export default SocialLinks
