import React from "react"
import { Route } from "react-router-dom"

import Header from "./components/Header.js"
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList.js"

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path={["/characters"/*, "/characters/:id"*/]} component={CharacterList} />
    </main>
  )
}
