import React from "react"
import { render } from "@testing-library/react"

import Index from "../../../src/pages/index"

describe("Index page", () => {
  test("should render Index page without throwing an error", () => {
    render(<Index />)
  })
})
