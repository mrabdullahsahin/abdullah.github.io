import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroArea from "../components/IndexHeroArea/IndexHeroArea"
import LatestPost from "../components/LatestPost/LatestPost"

const IndexPage = () => (
  <Layout>
    <HeroArea/>

    <div className="Logs">
      <h2>My Logs</h2>
      <div className="MakerLog">
        <iframe title="Makerlog Embed" height="300" width="50%" align="middle" scrolling="no" frameborder="0" allowtransparency="true" src="https://api.getmakerlog.com/users/2864/embed"></iframe>
      </div>
    </div>

    <div className="Posts">
      <h2> Latest Post </h2>
      <div className="PostsGroup">
        <LatestPost
          title="My Test Post"
          date="Jun 22, 2019"/>
          <hr/>
        <LatestPost
          title="My Test Post"
          date="Jun 22, 2019"/>
      </div>
    </div>

    <SEO title="Home"/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
