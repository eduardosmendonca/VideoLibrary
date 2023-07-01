import styled from 'styled-components'
import backgroundImg from '../../assets/comparativo_img_CTA.png'

export const Container = styled.main`
  width: 100%;
  height: 100vh;
`

export const Conversion = styled.section`
  height: 60vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h3 {
    padding: 10px 20px;
    border: 1px solid black;
    border-radius: 20px 20px 20px 5px;
  }

  background-color: ${({ theme }) => theme.COLORS.BG_TESTE};
`

export const VideoLibrary = styled.section`
  margin-top: 20px;
`

export const Navigation = styled.div`
  display: flex;
  gap: 20px;
`

export const PageNavigation = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`

export const SeeDemo = styled.section`
  height: 60vh;

  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${({ theme }) => theme.COLORS.BG_TESTE};
`

export const Image = styled.img`
  width: 40%;
  height: 60vh;

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
