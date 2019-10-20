import React from "react"
import { render } from "@testing-library/react"

import Tag from "@components/blog/tag"

import { matchers } from "jest-emotion"

expect.extend(matchers)

describe("Tag", () => {
  test("should render", () => {
    const { container } = render(<Tag name="js" />)

    expect(container.textContent).toBe("js")
  })

  test("should render react tag with different colors", () => {
    const { getByText } = render(<Tag name="react" />)

    const element = getByText("react")

    expect(element).toHaveStyleRule("color", "black")
    expect(element).toHaveStyleRule("background-color", "#61DBFB")
  })

  test("should render tag with default colors", () => {
    const { getByText } = render(<Tag name="random" />)

    const element = getByText("random")

    expect(element).toHaveStyleRule("color", "white")
    expect(element).toHaveStyleRule("background-color", "gray")
  })
})
