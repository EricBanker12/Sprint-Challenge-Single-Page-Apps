import React from "react"
import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav className="d-flex justify-content-center">
        <NavLink exact to="/" className="mx-3" activeClassName="text-muted">Home</NavLink>
        <NavLink to="/characters" className="mx-3" activeClassName="text-muted">Characters</NavLink>
      </nav>
    </header>
  )
}
