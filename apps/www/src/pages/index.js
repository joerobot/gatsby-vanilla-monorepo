import * as React from "react"
import {theme, Button} from "design-system"
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
      <Button>Button</Button>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
