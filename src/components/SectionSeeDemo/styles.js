import styled from 'styled-components'

import backgroundImg from '../../assets/comparativo_img_CTA.png'
import topApp from '../../assets/selo_RD.png'
import noCard from '../../assets/no-card-dark.webp'
import rating from '../../assets/rating.webp'

export const Container = styled.section`
  height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  background-color: ${({ theme }) => theme.COLORS.BG_BLUE};
`

export const Image = styled.div`
  width: 40%;
  height: 70vh;

  background: url(${backgroundImg}) no-repeat center center;
`

export const TextDemo = styled.div`
  width: 30%;

  > h2 {
    font-size: 40px;
    font-weight: 500;
  }

  > p {
    font-size: 22px;
    font-weight: 400;
    margin: 10px auto 20px;
  }

  > .wrapper-buttonImage {
    display: flex;
    align-items: left;

    margin-top: 20px;

    > Button {
      width: 45%;
      background-color: rgb(44, 131, 251);

      border: 1px solid rgb(44, 131, 251);

      color: ${({ theme }) => theme.COLORS.BG_WHITE};
      font-weight: 700;
    }
  }

  > .wrapper-satisfaction {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 4px;

    margin-top: 20px;

    > p {
      font-size: 14px;
    }
  }
`

export const ImageTopApp = styled.div`
  width: 45%;
  height: 60px;

  background: url(${topApp}) no-repeat center center;
`

export const ImageNoCard = styled.div`
  width: 3%;
  height: 15px;

  background: url(${noCard}) no-repeat center center;
`

export const ImageRating = styled.div`
  width: 16%;
  height: 15px;

  background: url(${rating}) no-repeat center center;
`
