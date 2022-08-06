import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import * as s from './styled-CartPage';
import { BASE_URL } from "../../constants/BASE_URL";
import { goToFeedPage, goToProfilePage } from '../../routes/coordinator'
import img_home from "./../../assets/img/home.png";
import img_cart from "./../../assets/img/cart.png";
import img_perfil from "./../../assets/img/perfil.png";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./../../components/global/GlobalContext";
import CardCart from "./../../components/cardCart/CardCart";

export default function CartPage() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate()
  const { currentUser } = useContext(GlobalContext)
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  const [cart2, setCart2] = useState(true);
  const [metPag, setMetPag] = useState('money');
  const [currentOrder, setCurrentOrder] = useState(false)

  const placeOrder = (body) => {
    axios.post(`${BASE_URL}/restaurants/${cart[0].idRestaurant}/order`, body,
      {
        headers:
        {
          auth: token
        }
      })
      .then(res => console.log('deu certo fazer pedido', res))
      .catch(err => console.log("deu errado fazer pedido", err.response.data))
  }

  const changeCart = (name) => {
    setCart2(!cart2);
    let novoCarrinho = cart.filter(item => {
      return item.name !== name
    })
    cart = novoCarrinho;
    localStorage.setItem("cart", JSON.stringify(novoCarrinho));
  }

  let soma = 0;
  let arrayBody = [];
  cart.forEach((item, index) => {
    const newObj = {
      id: item.idProduct,
      quantity: item.qtd
    }
    arrayBody.push(newObj);
    soma = soma + item.qtd * item.price;
  })

  const onClickPay = () => {
    if (!currentOrder) {
      const body = {
        products: arrayBody,
        paymentMethod: metPag
      }
      placeOrder(body);
    } else {
      alert('Existem ordens abertas! Aguarde as mesmas finalizarem');
    }
  }

  const onChangeMetPag = (event) => {
    setMetPag(event.target.value);
  }

  useEffect(() => {
    axios.get(`${BASE_URL}/active-order`, {
      headers: {
        auth: token
      }
    })
      .then(res => {
        if (res.data.order === null) {
          setCurrentOrder(false);
        } else {
          setCurrentOrder(true);
        }
      })
      .catch(err => console.log("deu errado verificar se existe pedido em andamento", err.response.data))
  }, [])

  return (
    <s.General>
      <s.Grid>
        <s.Line1>
          <h3>Meu carrinho</h3>
        </s.Line1>
        <s.Line2>
          <div>
          <p>
            Endereço de entrega
          </p>
            {currentUser.address}
          </div>
        </s.Line2>

        <s.Line3>
          {cart.length === 0 ? "Carrinho Vazio" : cart[0].description}
        </s.Line3>

        <s.Line4>
          {
            cart.map(item => {
              return (
                <CardCart key={item.name}
                  name={item.name}
                  photo={item.photo}
                  qtd={item.qtd}
                  description={item.description}
                  price={item.price}
                  changeCart={changeCart}
                />
              )
            })
          }
        </s.Line4>

        <s.Line5>
          <s.Ship>Frete R$: {cart.length === 0 ? "" : cart[0].shippingRestaurant.toFixed(2)}</s.Ship>
          <s.Total>
            <p>SUBTOTAL</p>
            <div>R$ {soma.toFixed(2)}</div>
          </s.Total>
          <s.Payment onChange={onChangeMetPag}>
          <s.PaymentInt>Forma de pagamento
          <hr></hr>
          </s.PaymentInt>
            <s.Money>
              <input checked="checked" name="metPag" value="money" type="radio" /> Dinheiro
              {/* <label>Dinheiro</label> */}
            </s.Money>
            <s.Credit>
              <input name="metPag" value="creditcard" type="radio" /> Cartão de Crédito
              {/* <label>Cartão de Crédito</label> */}
            </s.Credit>
          </s.Payment>
        </s.Line5>

        <s.Line6>
          <s.ButtonConfirmar onClick={onClickPay}>Confirmar</s.ButtonConfirmar>
        </s.Line6>

        <s.Line7>
          <s.ImgFooter src={img_home} onClick={() => goToFeedPage(navigate)} alt="Home" />
          <s.ImgFooter src={img_cart} alt="Home" />
          <s.ImgFooter src={img_perfil} onClick={() => goToProfilePage(navigate)} alt="Home" />
        </s.Line7>
      </s.Grid>
    </s.General>
  )
}