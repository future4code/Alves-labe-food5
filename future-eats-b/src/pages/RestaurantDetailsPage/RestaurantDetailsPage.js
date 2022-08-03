import React, { useEffect, useState } from "react";
import * as s from './styled-RestaurantDetailsPage';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';
import CardRestaurantDetail from "../../components/cardRestaurantDetail/CardRestaurantDetail";

export default function RestaurantDetailsPage() {
  const token = localStorage.getItem('token')
  const params = useParams()
  const [restaurantDetails, setRestaurantDetails] = useState({})

  const getRestaurantDetails = () => {
    axios.get(`${BASE_URL}/restaurants/${params.id}`, {
      headers: {
        auth: token
      }
    })
      .then(res => {
        // console.log('Detalhes do restaurante aparecem!', res);
        setRestaurantDetails(res.data.restaurant)
      })
      .catch(err => console.log("Deu errado pegar os detalhes do restaurante", err.response.data))
  }

  useEffect(() => {
    getRestaurantDetails()
  }, [])

  const restDet = restaurantDetails.products;
  console.log('restDet=', restDet);
  const categoryDif = []

  if (restDet) {
    for (let i = 0; i < restDet.length; i++) {
      if (categoryDif.length === 0) {
        categoryDif.push(restDet[i].category)
      } else {
        let add = true;
        for (let j = 0; j < categoryDif.length; j++) {
          if (restDet[i].category === categoryDif[j]) {
            add = false;
          }
        }
        if (add === true) {
          categoryDif.push(restDet[i].category)
        }
      }
    }
    // console.log(categoryDif);
  }

  for (let i = 0; i < categoryDif.length; i++) {
    <h2>{categoryDif[i]}</h2>
    for (let j = 0; j < restDet.length; j++) {
      if (categoryDif[i] === restDet[j].category) {
        <p>{restDet.name}</p>
      }
    }
  }

  return (
    <s.General>
      <s.Grid>
        <s.Line1>
          <h3>Restaurante</h3>
        </s.Line1>
        <s.Line2>
          <s.Img_edit src={restaurantDetails.logoUrl} alt="imagem-editar" />
        </s.Line2>

        <s.Line3>
          <p>{restaurantDetails.name}</p>
          <p>{restaurantDetails.category}</p>
          <s.ShippingDiv>
            <p>{restaurantDetails.deliveryTime} min</p>
            <p>R${restaurantDetails.shipping}</p>
          </s.ShippingDiv>
          <p>{restaurantDetails.address}</p>
        </s.Line3>

        <s.Line4>
          {
            categoryDif.map( cat => {
              return (
                <CardRestaurantDetail
                  cat={cat}
                  restDet={restDet}
                />
              )
            })
          }
        </s.Line4>
      </s.Grid>
    </s.General>
  )
}