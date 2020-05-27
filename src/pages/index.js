import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>List of bhajans</h1>
    <ul>
      <li><Link to="/hanuman-chalisa/">Hanuman Chalisa</Link></li>
      
    </ul>


  </Layout>
)

export default IndexPage
