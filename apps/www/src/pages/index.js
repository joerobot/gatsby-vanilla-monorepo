import * as React from "react"
import {theme} from "design-system"
import "design-system/design-system.css"


import {Header} from "../components/Header"


const IndexPage = () => {
  return (
    <main className={theme}>
      <Header>
        <h1>
          Congratulations
        </h1>
      </Header>
      <button>Button</button>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
