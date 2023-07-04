import styled from 'styled-components'
import backgroundImg from '../../assets/comparativo_img_CTA.png'

export const Container = styled.main`
  width: 100%;
  height: 100vh;
`

export const SeeDemo = styled.section`
  height: 60vh;

  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${({ theme }) => theme.COLORS.BG_BLUE};
`

export const Image = styled.div`
  width: 40%;
  height: 70vh;

  background: url(${backgroundImg}) no-repeat center center;
`

export const TextDemo = styled.div``

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

export const Links = styled.ul``
