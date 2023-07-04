import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  margin: 80px 400px;

  > .wrapper-cards {
    margin: 30px auto;
  }
`

export const Navigation = styled.div`
  display: flex;

  gap: 20px;

  margin-bottom: 20px;
`

export const SectionCard = styled.section`
  width: 100%;

  display: flex;
  gap: 30px;

  margin: 30px auto;
`

export const PageNavigation = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
  text-align: center;

  > p {
    margin-right: 10px;

    font-size: 24px;
    font-weight: 500;
  }

  > Button {
    border: 0;
    padding: 15px 15px;
    border-radius: 10px;

    font-size: 24px;
    font-weight: 500;
  }
`
