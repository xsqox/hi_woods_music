import React from "react"
import { Link } from "gatsby"
import "./layout.css"

const Nav = () => (
  <nav>
    <Link to="/">About</Link>
    <Link to="/listen/">Listen</Link>
    <Link to="/contact/">Contact</Link>
  </nav>
)

export default Nav
