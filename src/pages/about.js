import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const AboutContent = styled.p`
   {
    text-align: left;
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`bipin paul bedi`]} />
    <h1>About</h1>
    <AboutContent>
      Hi, welcome to my personal website, software engineering blog and dumping
      ground for my learnings. I'm bipin, a software developer, entrepreneur and
      open source contributor who's originally from New Delhi, India and
      currently living in the Sydney, Australia. Over the course of my career
      I've had the pleasure of working with a wealth of different technologies
      for various sized companies, mainly operating in very agile teams
      following Scrum or Kanban, using continuous deployment and most major
      clouds (AWS, Google and Azure) to deliver mission critical software. I was
      also lucky enough to lead and manage a team of highly skilled engineers
      building large scale enterprise systems. After almost 10 years in the
      corporate world, numerous battle scars and a growing appetite for a new
      adventure I finally threw the towel in 2019, decided to take more risks in
      life. Today I maintain several open source projects, contract on a side
      whilst also trying to set up my own start-up from the ground up. If I'm
      not busy building something technical then I'm probably doing sports
      (basketball, skating, swimming), reading a book or travelling. I also
      experiment a lot in cooking and tasting different cuisines and coffee ,
      which means that I spend a fair amount of my time exploring new coffee
      shops and restaurants in Sydney and around the world. However, besides all
      of these hobbies my absolute favourite downtime activity is a round of
      board games with friends and family, though not many people know about
      this.
    </AboutContent>{" "}
    <h1> Paul Blog</h1>
    <AboutContent>
      Paul blog is a blog which I've started in 2008 and restarted in 2009,
      20011, 2013, 2015 and 2019 [hoping to be last restart] after finally
      convincing myself to put some of my thoughts and ideas into writing. On
      this blog I mostly write about technical topic with a strong focus on .NET
      Core, F# and C#, Go, elixir, python, machine learning, security and
      cryptography, general programming trends, agile methodologies and software
      security practises.{" "}
    </AboutContent>
    <h1>Support</h1>
    <AboutContent>
      If you've got value from any of the content which I have created or you'd
      like to support the development and maintenance of any of my projects then
      I would very much appreciate your support by buying me a coffee.
    </AboutContent>
    <h1>Hire Me</h1>
    <AboutContent>
      Since 2019 I have been working as an independent software engineer. If I'm
      not busy working with another client then I'm usually available for time-
      and/or project based contracts lasting between three to six months. I
      offer a wide range of services which include, but are not limited to the
      ones listed below. If you would like to work together then please do not
      hesitate to contact me to discuss further details.
      <ul>
        <li>Software Development</li>
        <li>Software Architecture</li>
        <li>Mobile development</li>
        <li>Game development</li>
        <li>DevOps</li>
        <li>Security</li>
        <li>Training</li>
        <li>Machine Learning & Data Science</li>
      </ul>
    </AboutContent>
    <h1>Open Source Development</h1>
    <AboutContent>
      If your business heavily relies on one of my open source projects or you
      simply want to support the cause of open source software then you can also
      hire me to work on one of my projects, expedite a feature or help with an
      integration. For further information or to discuss any of my propositions
      please feel free to connect with me on LinkedIn.
    </AboutContent>
  </Layout>
)

export default AboutPage
