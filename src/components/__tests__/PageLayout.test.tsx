import React from "react"
import { render } from "@testing-library/react"

import PageLayout from "@components/PageLayout"

describe("PageLayout component", () => {
  test("should render children of PageLayout component", () => {
    const { container } = render(<PageLayout>Hello World</PageLayout>)

    expect(container.textContent).toBe("Hello World")
  })
})
