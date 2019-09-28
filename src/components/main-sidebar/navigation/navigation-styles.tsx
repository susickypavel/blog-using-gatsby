import styled from "@utils/styled"

export const NavigationWrapper = styled.nav`
  width: 100%;
  flex-grow: 1;

  display: flex;
  justify-content: center;

  & ul {
    margin: 16px 0;
  }
`

export const NavigationLink = styled.li`
  & a {
    color: ${props => props.theme.color.primary};
    text-decoration: none;

    display: block;
    padding: 8px 0;

    text-align: center;

    font-size: 2rem;
  }
`
