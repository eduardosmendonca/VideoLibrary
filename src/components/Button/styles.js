import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  border: 1px solid black;
  color: black;
  padding: 7px 20px;
  border-radius: 50px;
  font-weight: 500;
  font-size: 16px;

  background: ${({ theme }) => theme.COLORS.BG_WHITE};

  &:hover {
    background-image: linear-gradient(
      -45deg,
      rgba(44, 131, 251, 0.43461134453781514) 0%,
      rgba(31, 118, 240, 1) 0%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    border: 1px solid rgb(44, 131, 251);
  }
`
