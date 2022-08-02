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

export const Grid = styled.div`
  width: 375px;
  height: 667px;
  display: grid;
  border-radius: 20px;
  grid-template-rows: 60px 40px 80px 1fr 60px;
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
  justify-content: center;
  align-items: center;
  background-color: lightgreen;
`

export const Search = styled.input`
`

export const Line3 = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  background-color: lightcoral;
`

export const Category = styled.div`
  margin: 0 10px;
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