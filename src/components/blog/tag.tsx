import React from "react"
import { TagWrapper } from "./blog-styles"

interface Props {
  name: string
}

const Tag: React.FC<Props> = ({ name }) => {
  const colors: any = {
    javascript: { background: "#F0DB4F", foreground: "#323330" },
    typescript: { background: "#007acc", foreground: "white" },
    react: { background: "#61DBFB", foreground: "black" },
    angular: { background: "#b52e31", foreground: "white" },
    vue: { background: "#41B883", foreground: "#34495E" }
  }

  return (
    <TagWrapper
      to="/tags"
      state={{ tag: name }}
      colors={colors[name] || { background: "gray", foreground: "white" }}
    >
      {name}
    </TagWrapper>
  )
}

export default Tag
