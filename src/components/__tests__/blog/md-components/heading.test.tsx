import React from "react"
import { render } from "@testing-library/react"
import { Heading } from "@components/blog/md-components"

import { matchers } from "jest-emotion"

expect.extend(matchers)

describe("Heading component", () => {
  test("should render", () => {
    const { container } = render(
      <Heading heading="h1" fontSize={2}>
        John cena
      </Heading>
    )

    expect(container.textContent).toContain("John cena")
  })

  test("should render h3 element", () => {
    const { container } = render(
      <Heading heading="h3" fontSize={2}>
        John cena
      </Heading>
    )

    expect(container.querySelector("h3").textContent).toBe("John cena")
  })

  test("should render heading with passed font size", () => {
    const { container } = render(
      <Heading heading="h3" fontSize={3}>
        John cena
      </Heading>
    )

    expect(container.querySelector("h3")).toHaveStyleRule("font-size", "3rem")
  })
})
