import styled from 'styled-components';

export const General = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  box-sizing: border-box;
  background-color: #FFFFFF;
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
  /* border: solid 1px red; */
  margin-bottom: 40px;
`

export const Field = styled.fieldset`
  width: 328px;
  height: 56px;
  margin: 10px 0;
  border: solid 1px #b8b8b8;
`
export const Legend = styled.legend`
  color: gray;
  margin: 0 10px;
  padding: 0 10px;
  font-size: 12px;
`
export const Input = styled.input`
  width: 328px;
  height: 25px;
  border: none;
  margin: 5px 0;
  padding: 0 20px;
  font-size: 16px;
  ::placeholder{
    color:  #b8b8b8;
  }
  `

export const ButtonSave = styled.button`
  width: 328px;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
  background-color: #65B153;
  border: none;
  margin-top: 10px;  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
`
export const Line1 = styled.div`
  display: flex;
  border-bottom: solid 1px;
  border: solid 1px #b8b8b8;
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
  font-size: 16px;
  font-weight: bold;
`
