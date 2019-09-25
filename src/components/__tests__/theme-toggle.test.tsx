import React from "react"
import { render, fireEvent } from "@testing-library/react"

import ThemeToggle from "@components/theme-provider/theme-toggle"

describe("Theme Toggle", () => {
  test("should render checkbox", () => {
    const { container } = render(<ThemeToggle defaultChecked={true} />)

    expect(container.querySelector("input")).toBeTruthy()
  })

  test("checkbox should be checked by default", () => {
    const { container } = render(<ThemeToggle defaultChecked={true} />)

    const input = container.querySelector("input")

    expect(input.checked).toBe(true)
  })

  test("should call onChange event method when checkbox is clicked", () => {
    const callback = jest.fn()

    const { container } = render(<ThemeToggle onChange={callback} />)

    const input = container.querySelector("input")

    fireEvent.click(input)

    expect(callback).toBeCalledTimes(1)
  })
})
