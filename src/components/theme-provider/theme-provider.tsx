import React, { useState, ChangeEvent } from "react"
import { ThemeProvider } from "emotion-theming"

import { Theme } from "@utils/styled"
import ThemeToggle from "./theme-toggle"

const SiteThemeProvider: React.FC = ({ children }) => {
  const [darkTheme, setTheme] = useState<boolean>(JSON.parse(localStorage.getItem("theme")))

  const theme: Theme = {
    color: {
      primary: darkTheme ? "rgb(153,178,204)" : "rgb(51,102,153)",
      secondary: darkTheme ? "#fff" : "#000"
    },
    bg: {
      primary: darkTheme ? "#343434" : "#fff",
      secondary: darkTheme ? "#1B1B1B" : "lightgray"
    }
  }

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("theme", JSON.stringify(e.target.checked || false))
    setTheme(e.target.checked)
  }

  return (
    <ThemeProvider theme={theme}>
      {children}
      <ThemeToggle onChange={handleClick} defaultChecked={darkTheme} />
    </ThemeProvider>
  )
}

export default SiteThemeProvider
