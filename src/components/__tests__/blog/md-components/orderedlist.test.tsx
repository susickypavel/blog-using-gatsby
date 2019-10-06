import React from "react"
import serializer from "jest-emotion"
import { render } from "@testing-library/react"

import { OrderedList } from "@components/blog/md-components"

expect.addSnapshotSerializer(serializer)

describe("Ordered List component", () => {
  test("should render", () => {
    const { container } = render(
      <OrderedList>
        <li>Test</li>
      </OrderedList>
    )

    expect(container).toMatchSnapshot()
  })
})
