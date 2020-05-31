import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faSave, faExchangeAlt} from '@fortawesome/free-solid-svg-icons'
import HowItWorksExample from "../components/howItWorksExample"

const IndexPage = () => (
  <Layout>
    <section class="hero is-medium is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">The Bhajan Collection</h1>
          <h2 class="subtitle">A shared effort to explain and preserve our bhajans</h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <h1 class="title has-text-centered is-4">
              <FontAwesomeIcon className=" fa-2x" icon={faCopy}/>
                </h1>
                <h1 class="title has-text-centered is-4">
                Collect</h1>
              <p class="has-text-centered">
                We hope to gather together bhajans and make them easily available in one place 
              </p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
            <h1 class="title has-text-centered is-4">
              <FontAwesomeIcon className=" fa-2x" icon={faExchangeAlt}/>
                </h1>
            <h1 class="title has-text-centered is-4">Translate</h1>
            <p class="has-text-centered">We aim to translate the bhajans to share the meanings with future generations</p>
          </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
            <h1 class="title has-text-centered is-4">
              <FontAwesomeIcon className=" fa-2x" icon={faSave}/>
                </h1>
            <h1 class="title has-text-centered is-4">Preserve</h1>
            <p class="has-text-centered">
                We want to digitise the bhajans and make sure they are in an accessible format
              </p>
                </article>
          </div>
        
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title">How it works</h1>
        <HowItWorksExample />
      </div>
    </section>

  </Layout>
)

export default IndexPage
