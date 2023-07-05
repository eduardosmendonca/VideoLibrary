import styled from 'styled-components'
import backgroundImg from '../../assets/logo.png'

export const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 50px auto;

  > p {
    margin-top: 10px;
    color: #7c7598;
  }
`

export const BackgroundImg = styled.div`
  width: 100%;
  height: 5vh;

  background: url(${backgroundImg}) no-repeat center;
`

export const UsefulLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;

  margin-bottom: 100px;
`

export const Links = styled.ul`
  > li,
  p {
    list-style: none;
    margin-top: 20px;
    color: #7c7598;

    > a {
      color: #7c7598;
      text-decoration: none;

      &:hover {
        color: rgb(44, 131, 251);
      }
    }
  }
`

export const WrapperCopy = styled.div`
  margin: 20px;
  display: flex;

  gap: 180px;
  > p {
    color: #7c7598;
    font-size: 14px;

    > a {
      color: rgb(44, 131, 251);
      text-decoration: none;
    }
  }
`
