import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./layout.css"

const Nav = () => (
  <nav>
    <Link to="/">About</Link>
    <Link to="/listen/">Listen</Link>
    <Link to="/contact/">Contact</Link>
  </nav>
)

Nav.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Nav
