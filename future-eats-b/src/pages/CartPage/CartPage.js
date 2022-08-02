import React from "react";
import * as s from './styled-CartPage';
import img_home from "./../../assets/img/home.png";
import img_cart from "./../../assets/img/cart.png";
import img_perfil from "./../../assets/img/perfil.png";

export default function CartPage() {

  return (
    <s.General>
      <s.Grid>
        <s.Line1>
          <h3>Meu carrinho</h3>
        </s.Line1>
        <s.Line2>
          <div>
            Endereço de entrega
          </div>
          <div>
            Rua Alessandra Vieira, 42
          </div>
        </s.Line2>


        <s.Line3>
          Nome do restaurante
        </s.Line3>

        <s.Line4>
          Lista de produtos do carrinho
        </s.Line4>

        <s.Line5>
          <s.Ship>Frete: R$3,99</s.Ship>
          <s.Total>
            <div>Subtotal</div>
            <div>R$9,99</div>
          </s.Total>
          <div>Forma de pagamento</div>
          <hr></hr>
          <s.Payment>
            <s.Money>
              <input type="checkbox"></input>
              <label>Dinheiro</label>
            </s.Money>
            <s.Credit>
              <input type="checkbox"></input>
              <label>Cartão de Crédito</label>
            </s.Credit>
          </s.Payment>
        </s.Line5>

        <s.Line6>
          <button>Confirmar</button>
        </s.Line6>

        <s.Line7>
          <s.ImgFooter src={img_home} alt="Home" />
          <s.ImgFooter src={img_cart} alt="Home" />
          <s.ImgFooter src={img_perfil} alt="Home" />
        </s.Line7>
      </s.Grid>
    </s.General>
  )
}