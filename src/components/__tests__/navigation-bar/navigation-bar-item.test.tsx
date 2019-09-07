import React from "react"
import { render } from "@testing-library/react"

import "@testing-library/jest-dom/extend-expect"

import NavigationBarItem from "@components/navigation-bar/navigation-bar-item"

import { FiHome } from "react-icons/fi"

describe("navigation-bar-item", () => {
  test("should render NavigationBarItem with href value passed through props", () => {
    const { container } = render(
      <NavigationBarItem link={{ name: "Bruce lee", path: "/random", Icon: FiHome }} />
    )

    const link = container.querySelector("a")

    expect(link).toHaveAttribute("href", "/random")
  })

  test("should render NavigationBarItem with text content value containing props value", () => {
    const { container } = render(
      <NavigationBarItem link={{ name: "Bruce lee", path: "/random", Icon: FiHome }} />
    )

    const link = container.querySelector("a")

    expect(link).toHaveTextContent("Bruce lee")
  })

  test("should render icon inside NavigationBarItem passed by props", () => {
    const { container } = render(
      <NavigationBarItem link={{ name: "Bruce lee", path: "/random", Icon: FiHome }} />
    )

    const icon = container.querySelector("svg")

    expect(container).toContainElement(icon)
  })
})
