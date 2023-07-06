import styled from 'styled-components'

export const Container = styled.div`
  cursor: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(118, 137, 152, 0.6);
  z-index: 1;
`

export const Main = styled.main`
  width: 600px;
  height: 750px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 20px;
  border-radius: 20px;

  background-color: #fff;

  > .close {
    display: flex;
    justify-content: flex-end;
    font-weight: 700;
  }

  > h2 {
    width: 70%;
    margin: 10px auto 30px;
    font-weight: 600;

    > span {
      color: rgb(44, 131, 251);
    }
  }

  > h3 {
    display: flex;
    justify-content: flex-start;
  }
`
