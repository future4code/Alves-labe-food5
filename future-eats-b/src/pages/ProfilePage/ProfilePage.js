import React, { useEffect, useState } from "react";
import * as s from './styled-ProfilePage';
import img_home from "./../../assets/img/home.png";
import img_cart from "./../../assets/img/cart.png";
import img_perfil from "./../../assets/img/perfil.png";
import img_edit from "./../../assets/img/edit.png"
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import { useNavigate } from "react-router";
import { goToAddressPage, goToEditPage } from "../../routes/coordinator";

export default function ProfilePage() {
  const token = localStorage.getItem("token")
  const [userData, setUserData] = useState({})
  const navigate = useNavigate()

  const getProfile = () => {
    axios.get(`${BASE_URL}/profile`, {
      headers: {
        auth: token
      }
    })
      .then((res) => {
        console.log("Deu certo o getProfile", res.data.user)
        setUserData(res.data.user)
      })
      .catch((err) => {
        console.log("Deu errrado o getProfile")
        console.log(err)
      })
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <s.General>
      <s.Grid>
        <s.Line1>
          <h3>Meu Perfil</h3>
        </s.Line1>
        <s.Line2>
          <s.Left>
            <s.NomeProfile>{userData.name}</s.NomeProfile>
            <s.EmailProfile>{userData.email}</s.EmailProfile>
            <s.CpfProfile>{userData.cpf}</s.CpfProfile>

          </s.Left>
          <s.Img_edit onClick={() => goToEditPage(navigate)} src={img_edit} alt="imagem-editar" />

        </s.Line2>


        <s.Line3>
          <s.Left>
            {userData.address}
          </s.Left>
          <s.Img_edit onClick={() => goToAddressPage(navigate)} src={img_edit} alt="imagem-editar" />
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