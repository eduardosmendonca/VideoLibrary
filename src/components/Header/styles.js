import styled from 'styled-components'
import backgroundImg from '../../assets/logo.png'

export const Container = styled.header`
  width: 100%;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Image = styled.div`
  width: 100%;
  height: 10vh;

  background: url(${backgroundImg}) no-repeat center;
`
