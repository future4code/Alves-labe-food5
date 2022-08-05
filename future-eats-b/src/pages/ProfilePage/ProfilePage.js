import React, {useState, useEffect, useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import * as s from './styled-ProfilePage';
import img_home from "./../../assets/img/home.png";
import img_cart from "./../../assets/img/cart.png";
import img_perfil from "./../../assets/img/perfil.png";
import img_edit from "./../../assets/img/edit.png"
import { useNavigate } from "react-router";
import { goToAddressPage, goToEditPage, goToFeedPage, goToCartPage } from "../../routes/coordinator";
import { GlobalContext } from "../../components/global/GlobalContext";

export default function ProfilePage() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token');
  const [ordersHistory, setOrdersHistory] = useState()
  const { currentUser } = useContext(GlobalContext)

  useEffect(() => {
    axios.get(`${BASE_URL}/orders/history`, {
      headers: {
        auth: token
      }
    })
    .then(res => {
      setOrdersHistory(res.data.orders);
    })
    .catch(err => console.log("deu errado o history", err.response.data))
  }, [])

  return (
    <s.General>
      <s.Grid>
        <s.Line1>
          <h3>Meu Perfil</h3>
        </s.Line1>
        <s.Line2>
          <s.Left>
            <s.NomeProfile>{currentUser.name}</s.NomeProfile>
            <s.EmailProfile>{currentUser.email}</s.EmailProfile>
            <s.CpfProfile>{currentUser.cpf}</s.CpfProfile>

          </s.Left>
          <s.Img_edit onClick={() => goToEditPage(navigate)} src={img_edit} alt="imagem-editar" />
        </s.Line2>

        <s.Line3>
          <s.Left>
            {currentUser.address}
          </s.Left>
          <s.Img_edit onClick={() => goToAddressPage(navigate)} src={img_edit} alt="imagem-editar" />
        </s.Line3>

        <s.Line4>
          {ordersHistory && 
            ordersHistory.map( (order, index) => {
              let date = new Date(order.createdAt);
              return(
                <s.History key={index}>
                  <div>{order.restaurantName}</div>
                  <div>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</div>
                  <div>SUBTOTAL R${order.totalPrice.toFixed(2)}</div>
                </s.History>
              )
            })
          }
        </s.Line4>

        <s.Line5>
          <s.ImgFooter src={img_home} onClick={()=>goToFeedPage(navigate)} alt="Home" />
          <s.ImgFooter src={img_cart} onClick={()=>goToCartPage(navigate)} alt="Home" />
          <s.ImgFooter src={img_perfil} alt="Home" />
        </s.Line5>
      </s.Grid>
    </s.General>
  )
}