import React from "react"
import Layout from "../components/layout"
import JSONData from "../content/hanumanChalisa.json"

const SecondPage = () => (
  <Layout>

<div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
  { JSONData.verse1.gujarati }
  </div>
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
  { JSONData.verse1.transliteration }
  </div>
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
  { JSONData.verse1.translation }
  </div>

  </Layout>
)

export default SecondPage
