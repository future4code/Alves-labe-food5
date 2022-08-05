import React, { useEffect, useState } from "react";
import * as s from './styled-FeedPage';
import img_home from "./../../assets/img/home.png";
import img_cart from "./../../assets/img/cart.png";
import img_perfil from "./../../assets/img/perfil.png";
import img_relogio from "./../../assets/img/relogio.png"
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'
import { goToRestaurantDetailsPage, goToCartPage, goToProfilePage } from '../../routes/coordinator'
import { useNavigate } from "react-router-dom";

export default function FeedPage() {
  const token = localStorage.getItem('token')
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  const [list, setList] = useState([])
  const [category, setCategory] = useState("Todos")
  const [search, setSearch] = useState("")
  const [currentOrder, setCurrentOrder] = useState(false)
  const [openOrder, setOpenOrder] = useState()
  
  const navigate = useNavigate()

  const openFeed = () => {
    axios.get(`${BASE_URL}/restaurants`, {
      headers: {
        auth: token
      }
    })
      .then(res => {
        setList(res.data.restaurants)
      })
      .catch(err => console.log("Deu errado pegar o restaurante", err.response.data))
  }

  const getActiveOrder = () => {
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
          setOpenOrder(res.data.order)
        }
        console.log('deu certo verificar se existe pedido em andamento', res);
      })
      .catch(err => console.log("deu errado verificar se existe pedido em andamento", err.response.data))
  }

  useEffect(() => {
    openFeed()
    getActiveOrder()
  }, [])

  const newList = list
    .filter((element) => {
      if (category === "Todos") {
        return true
      } else {
        return element.category === category
      }
    })
    .filter((element) => {
      return element.name.toLowerCase().includes(search.toLowerCase())
    })
    .map((element) => {
      return (
        <div onClick={() => goToRestaurantDetailsPage(navigate, element.id)} key={element.name}>
          <s.Restaurant>{element.name}</s.Restaurant>
        </div>
      )
    })

  const onChangeCategory = (value) => {
    setCategory(value)
  }

  const onChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  let soma = 0;
  cart.forEach(item => {
    soma = soma + item.qtd * item.price;
  })

  return (
    <s.General>
      <s.Grid currentOrder={currentOrder}>
        <s.Line1>
          <h3>Future Eats</h3>
        </s.Line1>

        <s.Line2>
          <s.Search onChange={onChangeSearch} placeholder="Restaurante..."></s.Search>
        </s.Line2>

        <s.Line3>
          <s.Category onClick={() => onChangeCategory("Todos")}>Todos</s.Category>
          <s.Category onClick={() => onChangeCategory("Árabe")}>Árabe</s.Category>
          <s.Category onClick={() => onChangeCategory("Asiática")}>Asiática</s.Category>
          <s.Category onClick={() => onChangeCategory("Hamburguer")}>Hamburguer</s.Category>
          <s.Category onClick={() => onChangeCategory("Italiana")}>Italiana</s.Category>
          <s.Category onClick={() => onChangeCategory("Sorvetes")}>Sorvetes</s.Category>
          <s.Category onClick={() => onChangeCategory("Carnes")}>Carnes</s.Category>
          <s.Category onClick={() => onChangeCategory("Baiana")}>Baiana</s.Category>
          <s.Category onClick={() => onChangeCategory("Petiscos")}>Petiscos</s.Category>
          <s.Category onClick={() => onChangeCategory("Mexicana")}>Mexicana</s.Category>
        </s.Line3>

        {/* <s.Line4> */}
        <s.Espaco1>
          {newList}
        </s.Espaco1>

        {/* </s.Line4> */}


        <s.Ultima>
          <s.Espaco2>
            {
              currentOrder === true ?
                <>
                  <s.Left>
                    <s.Relogio src={img_relogio} alt="Relógio" />
                  </s.Left>
                  <s.Right>
                    <s.Div1>
                      Pedido em andamento
                    </s.Div1>
                    <s.Div2>
                      {openOrder.restaurantName}
                    </s.Div2>
                    <s.Div3>
                      SUBTOTAL R${openOrder.totalPrice.toFixed(2)}
                    </s.Div3>
                  </s.Right>
                </>
                :
                null
            }
          </s.Espaco2>
          <s.Line5>
            <s.ImgFooter src={img_home} alt="Home" />
            <s.ImgFooter src={img_cart} onClick={() => goToCartPage(navigate)} alt="Home" />
            <s.ImgFooter src={img_perfil} onClick={() => goToProfilePage(navigate)} alt="Home" />
          </s.Line5>
        </s.Ultima>


      </s.Grid>
    </s.General>
  )
}