import React from "react"
import { Link } from "gatsby"
import "../styles/index.scss"

const Header = () => (
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <Link to="/">Home</Link>
      </div>
    </div>

    <div id="navMenu" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <Link to="bhajans" >Bhajans</Link>
        </div>
        <div class="navbar-item">
          <Link to="mantras" >Mantras</Link>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
