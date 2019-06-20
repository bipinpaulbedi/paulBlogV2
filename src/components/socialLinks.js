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
  FaKaggle,
} from "react-icons/fa"

const SocialLink = styled.div`
    font-size: 1.5em;
    word-spacing: .4em;
}`

const SocialLinks = () => (
  <SocialLink>
    <a
      href="https://www.facebook.com/bipinpaulbedi"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      <FaFacebookSquare />{" "}
    </a>
    <a
      href="https://twitter.com/bipinpaulbedi"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      <FaTwitterSquare />
    </a>
    <a
      href="https://www.instagram.com/bipinpaulbedi/"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      <FaInstagram />
    </a>
    <a
      href="https://github.com/bipinpaulbedi"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      <FaGithubSquare />
    </a>
    <a
      href="https://www.linkedin.com/in/bipinpaulbedi/"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      <FaLinkedin />
    </a>
    <a
      href="https://www.youtube.com/channel/UCgr_5XPAWL1M4nqVghy2X8A"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      <FaYoutube />
    </a>
    <a
      href="https://www.kaggle.com/bipinpaulbedi"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      <FaKaggle />
    </a>
    <a
      href="https://hub.docker.com/u/bipinpaulbedi"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      <FaDocker />
    </a>
    <a
      href="https://stackoverflow.com/users/10877364/bipin-paul-bedi"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      <FaStackOverflow />
    </a>
    <a href="/404/">
      {" "}
      <FaCoffee />
    </a>
    <a href="/404/">
      {" "}
      <FaCcPaypal />
    </a>
    <a href="/404/">
      {" "}
      <FaCcStripe />
    </a>
    <a href="/rss.xml">
      {" "}
      <FaRssSquare />
    </a>
  </SocialLink>
)

export default SocialLinks
