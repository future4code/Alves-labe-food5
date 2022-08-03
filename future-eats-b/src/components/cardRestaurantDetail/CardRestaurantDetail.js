import React from "react";
import * as s from './styled-CardRestaurantDetail';

export default function CardRestaurantDetail(props) {

  const list = props.restDet.filter( item => {
    return item.category === props.cat
  })

  console.log('list=',list)

  return (
    <s.Card>
      <s.Title><h3>{props.cat}</h3></s.Title>
      {list.map( a => {
        return (
          <s.CardInterno>
            <s.Left>
              <s.ImageFood src={a.photoUrl} alt="Foto comida"/>
            </s.Left>
            <s.Right>
              <s.LineTop>
                <s.Name>{a.name}</s.Name>
                <s.Quantidade>2</s.Quantidade>
              </s.LineTop>
              <s.LineMiddle>
                <p>{a.description}</p>
              </s.LineMiddle>
              <s.LineBottom>
                <s.Price>R${a.price}</s.Price>
                <s.ButtonAddRemove>Adicionar</s.ButtonAddRemove>
              </s.LineBottom>
            </s.Right>
          </s.CardInterno>
        )
      })}
    </s.Card>
  )
}