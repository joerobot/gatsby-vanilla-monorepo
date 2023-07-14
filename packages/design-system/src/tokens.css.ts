import { createTheme, createThemeContract } from "@vanilla-extract/css"


export const tokens = createThemeContract({
  color: {
    black: "",
    white: "",
    blue: "",
    green: "",
    grey: ""
  },
  space: {
    xs: "",
    sm: "",
    md: "",
    lg: "",
  },
  fontSize: {
    xs: "",
    sm: "",
    md: "",
    lg: "",
  },
  radius: {
    xs: "",
    sm: "",
    md: "",
    lg: "",
  }
})

export const theme = createTheme(tokens, {
  color: {
    black: "#000",
    white: "#fff",
    blue: "blue",
    grey: "#d6d6d6",
    green: "green",
  },
  space: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
  },
  fontSize: {
    xs: "10px",
    sm: "12px",
    md: "16px",
    lg: "18px",
  },
  radius: {
    xs: "4px",
    sm: "6px",
    md: "8px",
    lg: "20px",
  }
})
