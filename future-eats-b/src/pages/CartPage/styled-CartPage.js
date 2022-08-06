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
  grid-template-rows: 60px 50px 70px 1fr 120px 60px 60px;
  box-sizing: border-box;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 10px 0 rgba(0,0,0,0.15);
`

export const Line1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`
export const MyCart = styled.div`
  font-size: 19px; 
`
export const Address = styled.div`
  padding-left: 10px; 
  display:flex;
  flex-direction: column;
  justify-content: start;
`

export const Line2 = styled.div`
  background-color: #eee;
  width: 100%;
  height: 76px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  p{
    color: #b8b8b8;
    margin: 3px;
  }
`

export const Delivery = styled.span`
  color: #b8b8b8;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const Search = styled.input`
`

//Container carrinho vazio
export const Line3 = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  background-color: white;

`

export const Description = styled.div`
  padding: 10px;
`
export const NameRestaurant = styled.p`
  color: #5cb646;
  font-size: 16px;
  /* font-family: Roboto; */
  font-weight: bold;
  `
export const AddressRestaurant = styled.span`
color: #b8b8b8;

;
/* padding: 10px; */
`
export const DeliveryTimeRestaurant = styled.span`
color: #b8b8b8;

;
  /* padding: 10px; */
`
export const RestaurantDetails = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`
export const Category = styled.div`
  margin: 0 10px;
`

export const Line4 = styled.div`
  background-color: white;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ButtonAddRemove = styled.div`
  width: 90px;
  height: 31px;
  margin: 7px 0 0 8px;
  padding: 8px 20.5px 9px 21.5px;
  border-radius: 8px 0px 8px 0px;
  border: solid 1px #5cb646;
  color: #5cb646;
  :hover{
    cursor: pointer;
  }
  :active{
    color: white;
    background-color: #5cb646;
  }
`

export const Line5 = styled.div`
  background-color: white;
`

export const Ship = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 12px;
`
export const TotalPrice = styled.div`
  margin-right: 10px;
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  color: #5cb646;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  p{
    color: black;
    font-weight: lighter;
    margin-left: 10px;
  }
`

export const Payment = styled.div`
  /* display: flex;
  flex-direction: column; */
  margin-left: 10px;
`

export const PaymentInt = styled.div`
  /* display: flex;
  flex-direction: column; */
  margin: 5px 0 5px 0;
  hr{
    margin: 5px 0 5px 0;
  }
`

export const Money = styled.div`
  /* display: flex;
  flex-direction: column; */
`

export const Credit = styled.div`
  /* display: flex;
  flex-direction: column; */
`

export const Line6 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  /* border: solid 1px red; */
`

export const ButtonConfirmar = styled.button`
  width: 328px;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
  background-color: #5cb646;
  border: none;
  font-size: 16px;
  font-weight: bold;
  &:hover {
		cursor: pointer;
    transform: scale(1.01);
    transition: transform .2s;
	}
`

export const Line7 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border: solid 1px #eeeeee;
`

export const ImgFooter = styled.img`
  width: 30px;
  &:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
`