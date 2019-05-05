import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import HiWoodsBrand from "../components/HiWoodsBrand"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Nav />
    <section>
      <h3>
        Get to <HiWoodsBrand />
      </h3>
      <p>
        We are totally open for collaboration or gigs. Let us know what you have
        in mind by dropping a note at{" "}
        <a href="mailto:hiwoodse@gmail.com">hiwoodse@gmail.com</a>.
      </p>
      <p>
        You can also find us around the Web. Feel free to leave your feedback or
        show support with likes and shares (honestly, will be much appreciated{" "}
        {"\u2764"}).
      </p>
      <p>
        May the <HiWoodsBrand text="High" /> and the{" "}
        <HiWoodsBrand text="Woods" /> be with you!
      </p>
    </section>
  </Layout>
)

export default SecondPage
