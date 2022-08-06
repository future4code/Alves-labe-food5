import React from "react";
import * as s from './styled-CardCart';

export default function CardRestaurantDetail(props) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []

  // const changeCart = () => {
  //   const novoCarrinho = cart.filter( item => {
  //     return item.name !== props.name
  //   })
  //   cart = novoCarrinho;
  //   localStorage.setItem("cart", JSON.stringify(novoCarrinho))
  // }

  return (
    <s.CardInterno>
      <s.Left>
        <s.ImageFood src={props.photo} alt="Foto comida" />
      </s.Left>
      <s.Right>
        <s.LineTop>
          <s.Name>{props.name}</s.Name>
          <s.Quantidade>{props.qtd === 0 ? '' : props.qtd}</s.Quantidade>
        </s.LineTop>
        <s.LineMiddle>
          <s.Description>{props.description}</s.Description>
        </s.LineMiddle>
        <s.LineBottom>
          <s.Price>R${props.price}</s.Price>
          {/* <s.ButtonAddRemove onClick={() => props.handleOpenModal(a, a.qtd, props.idRestaurant)}>{a.qtd === 0 ? 'adicionar' : 'remover'}</s.ButtonAddRemove> */}
          <s.ButtonAddRemove onClick={()=>props.changeCart(props.name)}>Remover</s.ButtonAddRemove>
        </s.LineBottom>
      </s.Right>
    </s.CardInterno>
  )
}