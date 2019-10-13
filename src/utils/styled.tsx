import styled, { CreateStyled } from "@emotion/styled"

export type Theme = {
  bg: {
    primary: string
    secondary: string
  }
  color: {
    primary: string
    secondary: string
    links: string
  }
}

export default styled as CreateStyled<Theme>
