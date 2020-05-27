// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"


import JSONData from "../content/hanumanChalisa.json"

const SecondPage = (props: PageProps) => (
  <Layout>
    
    <h1>Hanuman Chalisa</h1>


    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
  { JSONData.verse1.gujarati }
  </div>
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
  { JSONData.verse1.transliteration }
  </div>
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
  { JSONData.verse1.translation }

</div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
