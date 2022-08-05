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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 667px;
  border-radius: 20px;
  background-color: lightpink;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 10px 0 rgba(0,0,0,0.15);
`
export const Grid = styled.div`
  width: 375px;
  height: 667px;
  display: grid;
  border-radius: 20px;
  grid-template-rows: 60px 60px 80px 1fr 60px;
  /* min-width: 100vw; */
  /* min-width: 100%; */
  /* min-height: 100vh; */
  box-sizing: border-box;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 10px 0 rgba(0,0,0,0.15);
`

export const Line1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
`

export const Line2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightgreen;
`

export const Line3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: auto;
  background-color: lightcoral;
`

export const Line4 = styled.div`
  background-color: lightpink;

`
export const Line5 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: lightcyan; */
`

export const ImgFooter = styled.img`
  width: 30px
`

export const NomeProfile = styled.div`

`
export const EmailProfile = styled.div`

`
export const CpfProfile = styled.div`

`
export const Left = styled.div`

`
export const Img_edit = styled.img`
  width: 20px;
`

export const History = styled.div`
  margin: 20px 0;
`