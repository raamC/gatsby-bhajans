import React, { useState } from "react"
import Layout from "../components/layout"
import JSONData from "../content/hanumanChalisa.json"
import hanuman from "../images/hanuman.jpg"

const HanumanChalisaPage = () => {
  const [showGujarati, setShowGujarati] = useState(true)
  const [showTranslation, setShowTranslation] = useState(true)

  return (
    <Layout>
      <section class="section">
        <div class="container">
          <div class="columns" style={{ display: 'flex', 'flex-wrap': 'wrap-reverse' }}>

            <div class="column is-two-thirds" style={{ 'min-width': '60%' }}>
              <div class="notification">
                <h1 class="title is-1">{JSONData.title.transliteration}</h1>
                <h2 class="subtitle is-3">{JSONData.title.gujarati}</h2>


                {JSONData.sections.map(section => (
                  <div class="bhajan-section">
                    <div class="section-gujarati" style={showGujarati ? {} : { display: 'none' }} >
                      {section.gujarati}
                    </div>
                    <div class="section-transliteration">
                      {section.transliteration}
                    </div>
                    <div class="section-translation" style={showTranslation ? {} : { display: 'none' }}>
                      {section.translation}
                    </div>

                  </div>

                ))}

              </div>

            </div>
            <div class="column is-one-third">
              <div class="notification">
                <h3 class="title">Options</h3>
                <button class="button options-button" onClick={() => setShowGujarati(!showGujarati)}>
                  {showGujarati ? "Hide" : "Show"} Gujarati
                    </button>
                <button class="button options-button" onClick={() => setShowTranslation(!showTranslation)}>
                  {showTranslation ? "Hide" : "Show"} translation
                    </button>
              </div>
              <section class="section">
                <div class="container">
                  <img src={hanuman} alt="Hanuman" />
                </div>
              </section>
              <section class="section">
                <div class="container">
                  <iframe
                    width="100%"
                    src="https://www.youtube.com/embed/AETFvQonfV8"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  >
                  </iframe>
                </div>
                <div class="container">
                  <iframe
                    width="100%"
                    src="https://www.youtube.com/embed/9ca5_p87c6o"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  >

                  </iframe>
                </div>
                <div class="container">
                  <iframe
                    width="100%"
                    src="https://www.youtube.com/embed/M9Qg_0nFaGc"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  >

                  </iframe>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>



    </Layout>
  )
}

export default HanumanChalisaPage
