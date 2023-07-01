import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BG_WHITE};
    font-size: 16px;
  }

  button:hover {
    cursor: pointer;
  }
`
