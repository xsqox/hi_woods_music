import React from "react"
import { Link } from "gatsby"
import s from "./nav.module.css"

const Nav = () => (
  <nav className={s.nav}>
    <Link
      className={`hover-shadow ${s.navLink}`}
      to="/"
      activeClassName={s.active}
    >
      About
    </Link>
    <Link
      className={`hover-shadow ${s.navLink}`}
      to="/listen"
      activeClassName={s.active}
    >
      Listen
    </Link>
    <Link
      className={`hover-shadow ${s.navLink}`}
      to="/contact"
      activeClassName={s.active}
    >
      Contact
    </Link>
  </nav>
)

export default Nav
