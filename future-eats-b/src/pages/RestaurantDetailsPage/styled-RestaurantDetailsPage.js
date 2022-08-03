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
  background-color: lightgoldenrodyellow;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 10px 0 rgba(0,0,0,0.15);
`

export const Grid = styled.div`
  width: 375px;
  height: 667px;
  display: grid;
  border-radius: 20px;
  grid-template-rows: 60px 120px 80px 1fr;
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

export const Search = styled.input`
`

export const Line3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  overflow-x: auto;
  background-color: lightcoral;
`

export const Category = styled.div`
  margin: 0 10px;
`

export const Line4 = styled.div`
  background-color: lightpink;

`
export const Img_edit = styled.img`
  width: 100px;
`

export const ShippingDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`