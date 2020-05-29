import React, { useState } from "react"
import Layout from "../components/layout"
import JSONData from "../content/hanumanChalisa.json"

const HanumanChalisaPage = () => {
  const [showGujarati, setShowGujarati] = useState(true)
  const [showTranslation, setShowTranslation] = useState(true)

  return (
    <Layout>
      <section class="section">
        <div class="container">
          <div class="columns" style={{ display: 'flex', 'flex-wrap': 'wrap-reverse' }}>

            <div class="column is-two-thirds" style={{'min-width': '60%'}}>
              <div class="notification">
                <h1 class="title is-1">Hanuman Chalisa</h1>

                <div style={showGujarati ? {} : { display: 'none' }} >
                  {JSONData.verse1.gujarati}
                </div>
                <div>
                  {JSONData.verse1.transliteration}
                </div>
                <div style={showTranslation ? {} : { display: 'none' }}>
                  {JSONData.verse1.translation}
                </div>
              </div>

            </div>
            <div class="column is-one-third">
              <div class="notification">
                    <h3 class="title">Options</h3>
                    <button class="button" style={{margin: '0 .5rem .5rem 0'}} onClick={() => setShowGujarati(!showGujarati)}>
                      {showGujarati ? "Hide" : "Show"} Gujarati
                    </button>
                    <button class="button" style={{margin: '0 .5rem .5rem 0'}} onClick={() => setShowTranslation(!showTranslation)}>
                      {showTranslation ? "Hide" : "Show"} translation
                    </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default HanumanChalisaPage
