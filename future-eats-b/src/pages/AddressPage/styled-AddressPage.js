import styled from 'styled-components';

export const General = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  box-sizing: border-box;
`

export const Container = styled.div`
  width: 375px;
  height: 667px;
  display: grid;
  border-radius: 20px;
  grid-template-rows: 60px 1fr;
  box-sizing: border-box;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 10px 0 rgba(0,0,0,0.15);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
`

export const ButtonSave = styled.button`
`

export const Line1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
`

export const BoxImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 10%;
`

export const ButtonBack = styled.img`
  width: 25px;
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 90%;
  height: 100%;
`
