import React from "react"
import {header} from "./header.css"

export const Header = ({children}) => {
  return <header className={header}>{children}</header>
}
