import React from "react";
import * as s from './styled-FeedPage';
import img_home from "./../../assets/img/home.png";
import img_cart from "./../../assets/img/cart.png";
import img_perfil from "./../../assets/img/perfil.png";

export default function FeedPage() {

  return (
    <s.General>
      <s.Grid>
        <s.Line1>
          <h3>Future Eats</h3>
        </s.Line1>
        
        <s.Line2>
          <s.Search></s.Search>
        </s.Line2>
        
        <s.Line3>
          <s.Category>Árabe</s.Category>
          <s.Category>Asiática</s.Category>
          <s.Category>Hamburguer</s.Category>
          <s.Category>Italiana</s.Category>
          <s.Category>Sorvetes</s.Category>
          <s.Category>Carnes</s.Category>
          <s.Category>Baiana</s.Category>
          <s.Category>Petiscos</s.Category>
          <s.Category>Mexicana</s.Category>
        </s.Line3>
        
        <s.Line4>
          Linha 4
        </s.Line4>
        
        <s.Line5>
          <s.ImgFooter src={img_home} alt="Home"/>
          <s.ImgFooter src={img_cart} alt="Home"/>
          <s.ImgFooter src={img_perfil} alt="Home"/>
        </s.Line5>
      </s.Grid>
    </s.General>
  )
}