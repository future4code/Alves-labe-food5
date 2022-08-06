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
  box-sizing: border-box;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 10px 0 rgba(0,0,0,0.15);
`
//container restaurante
export const Line1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-size: 16px;
`
//box modal

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
//texto modal
export const Texto = styled.div`
  font-size: 16px;
  text-align: center;
`

export const Selecionar = styled.select`
  margin: 20px 0 0 0 ;
  width: 75%;
  height: 40px;
  border: solid 1px gray;
`

export const Option = styled.option`
`

export const Linha3 = styled.div`
  display: flex;
  width: 75%;
  justify-content: end;
`

export const Adicionar = styled.div`
  margin: 30px 0 0 0;
  color: #5cb646;
  font-size: 12px;
  text-align: center;
  :hover{
    cursor: pointer;
  }
  :active{
    color: #3b722e;
  }
`

// seta voltar
export const BoxImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 10%;
`

export const ButtonBack = styled.img`
  width: 25px;
`
// restaurante topo
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 90%;
  height: 100%;
`

//container imagem topo
export const Line2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`

export const Search = styled.input`
`
//nome do restaurante
export const TituloLinha3 = styled.div`
  color: #5cb646;
  font-size: 16px;
  margin-top: 5px;
`
//Descrição restaurante
export const Line3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  overflow-x: auto;
  background-color: white;
  color: #b8b8b8;
  padding-left: 10px;
`

export const Category = styled.div`
  margin: 0 10px;
`

export const Line4 = styled.div`
  background-color: white;
  overflow-y: auto;
  ::-webkit-scrollbar {
      width: 2px
  }
  ::-webkit-scrollbar-thumb {
  background-color: lightgrey;
  border-radius: 3px;
  } 
`
export const Img_edit = styled.img`
    width: 100%;
    height: 120px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    /* object-fit: contain; */
    /* object-fit: fill; */
    /* object-fit: scale-down; */
    /* object-fit: cover; */
`

export const ShippingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`