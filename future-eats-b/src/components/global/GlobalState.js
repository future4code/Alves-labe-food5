import React, { useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext"
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";

export default function GlobalState(props) {
  const token = localStorage.getItem("token")
  // const listCart = localStorage.getItem("cart") || []
  // console.log("GlobalState", listCart)
  // const listCart = JSON.parse(localStorage.getItem("cart")) || []
  // const [cart, setCart] = useState(localStorage.getItem("cart"))
  const [cart, setCart] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  // setCart(listCart)

  const getProfile = () => {
    axios.get(`${BASE_URL}/profile`, {
      headers: {
        auth: token
      }
    })
      .then((res) => {
        setCurrentUser(res.data.user)
      })
      .catch((err) => {
        console.log("Deu errrado o getProfile")
        console.log(err)
      })
  }

  useEffect(() => {
    getProfile()
  }, [])

  const values = {
    currentUser,
    setCurrentUser,
    cart,
    setCart
  }

  const Provider = GlobalContext.Provider

  return <Provider value={values}>{props.children}</Provider>
}