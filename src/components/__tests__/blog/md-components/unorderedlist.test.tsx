import React from "react"
import serializer from "jest-emotion"
import { render } from "@testing-library/react"

import { UnorderedList } from "@components/blog/md-components"

expect.addSnapshotSerializer(serializer)

describe("Unordered List component", () => {
  test("should render", () => {
    const { container } = render(
      <UnorderedList>
        <li>Test</li>
      </UnorderedList>
    )

    expect(container).toMatchSnapshot()
  })
})
