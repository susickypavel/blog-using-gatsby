import React from "react"
import serializer from "jest-emotion"
import { render } from "@testing-library/react"

import { Paragraph } from "@components/blog/md-components"

expect.addSnapshotSerializer(serializer)

describe("Paragraph component", () => {
  test("should render", () => {
    const { container } = render(<Paragraph>Test</Paragraph>)

    expect(container).toMatchSnapshot()
  })
})
