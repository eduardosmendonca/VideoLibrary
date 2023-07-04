import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100vh;
`

export const Footer = styled.footer`
  margin: 20px auto;
`

export const UsefulLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;

  border-bottom: 1px solid black;
`

export const Links = styled.ul`
  > li {
    list-style: none;

    > a {
      text-decoration: none;
    }
  }
`
