import React from "react";
import * as s from './styled-RestaurantDetailsPage';

export default function RestaurantDetailsPage() {

  return (
    <s.General>
      <s.Grid>
        <s.Line1>
          <h3>Restaurante</h3>
        </s.Line1>
        <s.Line2>
          Foto Restaurante
          {/* <s.Img_edit src={img_edit} alt="imagem-editar"/>         */}
        </s.Line2>


        <s.Line3>
          Endereço Cadastrado
        </s.Line3>

        <s.Line4>
          Categorias
        </s.Line4>
      </s.Grid>
    </s.General>
  )
}