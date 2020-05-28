import React from "react"
import { Link } from "gatsby"
import "../styles/index.scss"

const Header = () => (
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <div class="navbar-item">
      <Link to="/">
      The Bhajan Project
      </Link>
    </div>    
  </div>
</nav>
)

export default Header
