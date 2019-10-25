import styled from "@utils/styled"

// TODO: Extract to constants
export const BlockParagraph = styled.p`
  font-weight: normal;
  font-size: 2rem;
  line-height: 1.5;

  text-align: center;

  max-width: 700px;
  width: 100%;

  padding: 0 8px;
  margin: 16px auto;
`

export const AboutPageBody = styled.div`
  & p:first-of-type {
    margin-top: 0;
  }
`

export const AboutPageBodyImageHolder = styled.div`
  text-align: center;
`

export const AboutPageImage = styled.img`
  width: 100%;
  height: 100%;
`

export const AboutPageLink = styled.a`
  display: inline-block;
  width: 125px;
  height: 125px;

  margin: 0 8px;

  @media (max-width: 375px) {
    display: block;
    margin: 8px auto;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`
