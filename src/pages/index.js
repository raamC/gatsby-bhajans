import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import "../styles/index.scss"

const IndexPage = () => (
  <Layout>
    
    <h1>List of bhajans</h1>
    <ul>
      <li><Link to="/hanuman-chalisa/">Hanuman Chalisa</Link></li>
      
    </ul>

    <div className="container">
      <div className="columns">
        <div className="column">
          <h2 className="title is-2">Level 2 heading</h2>
          <p className="content">Cool content. Using Bulma!</p>
        </div>
        <div className="column is-four-fifths">
          <h2 className="title is-2">Level 2 heading</h2>
          <p className="content">This column is cool too!</p>
        </div>
      </div>
    </div>


  </Layout>
)

export default IndexPage
