import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Nav from "../components/nav"
import HiWoodsBrand from "../components/HiWoodsBrand"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home | Hi Woods"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <Nav />
    <section>
      <h3>
        Hi there from <HiWoodsBrand />
      </h3>
      <p>We are a duo IDM band currenly located in Montreal.</p>
      <p>
        Inspired by vast and wild spaces, we bring you <tt>#post_minimal</tt>,{" "}
        <tt>#dream_minimal</tt>, <tt>#dance_ambient</tt> from Point Canada.
      </p>
      <p>
        It's rainfallish techno beats coupled with funky synth slowly
        transforming into trippy dream hop just to give way to airy piano
        passages and drone harmonies...
      </p>
      <p>
        Anyway, less words, more woods! <Link to="/music/">Listen</Link>
        <span> </span>
        and hope you enjoy.
      </p>
    </section>
  </Layout>
)

export default IndexPage
