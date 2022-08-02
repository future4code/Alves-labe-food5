import React from "react";
import * as s from './styled-ProfilePage';
import img_home from "./../../assets/img/home.png";
import img_cart from "./../../assets/img/cart.png";
import img_perfil from "./../../assets/img/perfil.png";
import img_edit from "./../../assets/img/edit.png"

export default function ProfilePage() {

  return (
    <s.General>
      <s.Grid>
        <s.Line1>
          <h3>Meu Perfil</h3>
        </s.Line1>
        <s.Line2>
          <s.Left>
           <>Bruna Oliveira</>
          </s.Left>
          <s.Img_edit src={img_edit} alt="imagem-editar"/>          
          
        </s.Line2>


        <s.Line3>
        <s.Left>
           <>Rua Alessandra Vieira, 42</>
          </s.Left>
          <s.Img_edit src={img_edit} alt="imagem-editar"/> 
        </s.Line3>

        <s.Line4>
          Histórico de Pedidos
        </s.Line4>

        <s.Line5>
          <s.ImgFooter src={img_home} alt="Home" />
          <s.ImgFooter src={img_cart} alt="Home" />
          <s.ImgFooter src={img_perfil} alt="Home" />
        </s.Line5>
      </s.Grid>
    </s.General>
  )
}