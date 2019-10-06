import React from "react"
import { render } from "@testing-library/react"
import { BlockQuote } from "@components/blog/md-components"

import { matchers } from "jest-emotion"
import SiteThemeProvider from "@components/theme-provider/theme-provider"

expect.extend(matchers)

describe("Blockquote component", () => {
  test("should render", () => {
    const { container } = render(
      <SiteThemeProvider>
        <BlockQuote>Quoted</BlockQuote>
      </SiteThemeProvider>
    )

    expect(container.textContent).toContain("Quoted")
  })

  test("should render passed text in paragraph", () => {
    const { container } = render(
      <SiteThemeProvider>
        <BlockQuote>Quoted</BlockQuote>
      </SiteThemeProvider>
    )

    expect(container.querySelector("p").textContent).toContain("Quoted")
  })
})
