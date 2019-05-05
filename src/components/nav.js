import React from "react"
import { Link } from "gatsby"
import s from "./nav.module.css"

const Nav = () => (
  <nav className={s.nav}>
    <Link className={"hover-shadow"} to="/">
      About
    </Link>
    <Link className={"hover-shadow"} to="/listen/">
      Listen
    </Link>
    <Link className={"hover-shadow"} to="/contact/">
      Contact
    </Link>
  </nav>
)

export default Nav
