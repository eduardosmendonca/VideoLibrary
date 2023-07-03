import styled from 'styled-components'

export const Container = styled.section`
  height: 60vh;

  background-color: ${({ theme }) => theme.COLORS.BG_BLUE};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 580px;

  > h3 {
    background-image: linear-gradient(
      -45deg,
      rgba(44, 131, 251, 0.43461134453781514) 0%,
      rgba(31, 118, 240, 1) 0%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-weight: 700;
    font-size: 14px;

    margin-bottom: 20px;
    padding: 5px 20px;
    border: 2px solid rgb(44, 131, 251);
    border-radius: 20px 20px 20px 5px;
  }

  > h2 {
    font-weight: 400;
    font-size: 50px;
  }

  > h1 {
    background-image: linear-gradient(
      -45deg,
      rgba(44, 131, 251, 0.43461134453781514) 0%,
      rgba(31, 118, 240, 1) 0%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-weight: 700;
    font-size: 90px;

    margin-bottom: 20px;
  }

  > p {
    margin-top: 20px;
    font-size: 19px;

    font-weight: 400;
  }
`
