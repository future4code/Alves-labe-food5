import React, { useEffect, useState } from "react";
import * as s from './styled-FeedPage';
import img_home from "./../../assets/img/home.png";
import img_cart from "./../../assets/img/cart.png";
import img_perfil from "./../../assets/img/perfil.png";
import axios from 'axios'
import {BASE_URL} from '../../constants/BASE_URL'
import {goToRestaurantDetailsPage} from '../../routes/coordinator'
import { useNavigate } from "react-router-dom";

export default function FeedPage() {
  const token = localStorage.getItem('token')
  const [list, setList] = useState([])
  const [category, setCategory] = useState("Todos")
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
    
  const openFeed = () => {
    axios.get(`${BASE_URL}/restaurants`, {
      headers: {
        auth: token
      }
    })
      .then(res => {
        console.log('Dados de restaurante aparecem!', res);
        setList(res.data.restaurants)
        
      })
      .catch(err => console.log("Deu errado pegar o restaurante", err.response.data))
  }

  useEffect(() => { 
    openFeed()
  }, [])  

  const newList = list
  .filter((element) => {
    if (category === "Todos"){
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
    <div onClick={() => goToRestaurantDetailsPage(navigate, element.id)}>
      <p>{element.name}</p>      
    </div>
    )
  })

  const onChangeCategory = (value) => {
    setCategory(value)
  }

  const onChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <s.General>
      <s.Grid>
        <s.Line1>
          <h3>Future Eats</h3>
        </s.Line1>

        <s.Line2>
          <s.Search onChange={onChangeSearch}></s.Search>
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

        <s.Line4>
          {newList}
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