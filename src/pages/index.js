import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <section class="hero is-medium is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">The Bhajan Project</h1>
          <h2 class="subtitle">A shared effort to explain and preserve our bhajans</h2>
        </div>
      </div>
    </section>


    <section class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <h1 class="title has-text-centered is-4">Collect</h1>
              <p class="has-text-centered">
                We hope to gather together the bhajans and make them easily available in one place 
              </p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
            <span class="fas fa-camera"></span>
            <h1 class="title has-text-centered is-4">Preserve</h1>
            <p class="has-text-centered">
                We want to digitise the bhajans and make sure they are in an accessible format
              </p>
              
                </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
            <h1 class="title has-text-centered is-4">Translate</h1>
            <p class="has-text-centered">We aim to translate the bhajans to share the meanings with future generations</p>
          </article>
          </div>
        </div>


      </div>
    </section>



    <section class="section">
      <div class="container">
        <h1 class="title">We are working together to collect and translate bhajans for the future generations</h1>
      </div>
    </section>



  </Layout>
)

export default IndexPage
