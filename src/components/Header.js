import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.scss"

export default function Header(props) {
  return (
    <header
      className={`${headerStyles.header} ${props.page === 'connect' &&
        headerStyles.connect_page}`}
    >
      <nav
        className={headerStyles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/">
          <h1>{props.title}</h1>
        </Link>
        <div>
          <h1>
            <Link
              to={
                props.page === 'connect'
                  ? "/"
                  : "/connect"
              }
              activeClassName={headerStyles.navItemActive}
            >
              {props.page === 'connect'
                ? "close"
                : "connect"}
            </Link>
          </h1>
          <Link to="https://killyourgod.ai">
          <h1>shop</h1>
          </Link>
        </div>
      </nav>
    </header>
  )
}
