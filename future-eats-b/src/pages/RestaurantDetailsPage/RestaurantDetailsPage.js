import React, { useEffect, useState } from "react";
import * as s from './styled-RestaurantDetailsPage';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'

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
        console.log('Detalhes do restaurante aparecem!', res);
        setRestaurantDetails(res.data.restaurant)
      })
      .catch(err => console.log("Deu errado pegar os detalhes do restaurante", err.response.data))
  }

  useEffect(() => {
    getRestaurantDetails()
  }, [])

  const restDet = restaurantDetails.products?.map((element) => {
    return <div>
      <p>{element.category}</p>
      <p>{element.name}</p>
    </div>
  })


  const categoryDif = []

  // if(restDet){
  //   for (let i=0; i < restDet.length; i++){
  //     if(categoryDif.length === 0){ 
  //       categoryDif.push(restDet[i].category)
  //     } else{
  //       for (let j = 0; j < categoryDif.length; j++){
  //         if(restDet[i].category === categoryDif[j]){
  //           categoryDif.push(restDet[i].category)
  //           console.log(restDet)
  //         }
  //       }

  //     }
  //   }
  //   console.log(categoryDif)
  // }




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
          Categorias
          {restDet}
        </s.Line4>
      </s.Grid>
    </s.General>
  )
}