import styled from 'styled-components'
import backgroundImg from '../../assets/thumbnail.png'

export const Container = styled.div`
  width: 100%;
  height: 280px;

  border-radius: 20px;

  box-shadow: 10px 10px 10px rgb(237, 239, 241);

  > p {
    margin: 15px 40px;
    text-align: left;

    font-weight: 700;
  }

  &:hover {
    cursor: pointer;
  }
`

export const Image = styled.div`
  width: 100%;
  height: 200px;

  background: url(${backgroundImg}) no-repeat center;

  border-radius: 20px 20px 0 0;
`
