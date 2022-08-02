import React, { useEffect, useState } from "react";
import * as s from './styled-AddressPage';
import useForm from "./../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";

export default function AddressPage() {
  const token = localStorage.getItem("token")
  const [street_, setStreet] = useState("")
  const [number_, setNumber] = useState("")
  const [complement_, setComplement] = useState("")
  const [neighbourhood_, setNeighbourhood] = useState("")
  const [city_, setCity] = useState("")
  const [state_, setState] = useState("")
  const [currentHasAddress, setCurrentHasAddress] = useState(false)
  const [loading, setloading] = useState(false)
  let { form, onChange, cleanFields } = useForm({
    street: "",
    number: "",
    complement: "",
    neighbourhood: "",
    city: "",
    state: "",
  })


  useEffect(() => {
    getProfile()
  }, [currentHasAddress])

  // useEffect(() => {
  //   getFullAddress()
  // }, [])

  const getProfile = () => {
    axios.get(`${BASE_URL}/profile`, {
      headers: {
        auth: token
      }
    })
      .then((res) => {
        console.log("Deu certo o getProfile", res)
        if (res.data.user.hasAddress === true) {
          // console.log("entre no if do getProfile", res)
          setCurrentHasAddress(true)
          getFullAddress()
        }
      })
      .catch((err) => {
        console.log("Deu errrado o getProfile")
        console.log(err)
      })
  }

  const getFullAddress = () => {
    // console.log(currentHasAddress)
    axios.get(`${BASE_URL}/profile/address`, {
      headers: {
        auth: token
      }
    })
      .then((response) => {
        console.log("Deu certo o getFullAddress", response)
        // console.log(currentHasAddress)
        if (currentHasAddress === true) {
          // console.log("entri no if do currentHasAddress")
          setStreet(response.data.address.street)
          setNumber(response.data.address.number)
          setComplement(response.data.address.complement)
          setNeighbourhood(response.data.address.neighbourhood)
          setCity(response.data.address.city)
          setState(response.data.address.state)
          setloading(true)
        }
      })
      .catch((err) => {
        console.log("Deu errrado o getFullAddress")
        console.log(err)
      })
  }

  const addAddress = (body) => {
    console.log(body)
    axios.put(`${BASE_URL}/address`, body, {
      headers: {
        auth: token
      }
    })
      .then((res) => {
        console.log("Deu certo o addAddress", res)
      })
      .catch((err) => {
        console.log("Deu errado o addAddress")
        console.log(err.response.data)
      })
  }

  const register = (event) => {
    event.preventDefault();
    addAddress(form)
  }

  return (
    <s.General>
      <s.Container>
        <s.Title>
          <h2>Endereço</h2>
        </s.Title>

        <s.Form onSubmit={register}>
          <s.Input
            name={"street"}
            // value={form.street}
            value={form.street === "" ? form.street = street_ : form.street}
            onChange={onChange}
            placeholder="Logradouro"
            required
            type={"text"}
          />
          <s.Input
            name={"number"}
            value={form.number === "" ? form.number = number_ : form.number}
            onChange={onChange}
            placeholder="Número"
            required
            type={"number"}
          />
          <s.Input
            name={"complement"}
            value={form.complement === "" ? form.complement = complement_ : form.complement}
            onChange={onChange}
            placeholder="Complemento"
            type={"text"}
          />
          <s.Input
            name={"neighbourhood"}
            value={form.neighbourhood === "" ? form.neighbourhood = neighbourhood_ : form.neighbourhood}
            onChange={onChange}
            placeholder="Bairro"
            required
            type={"text"}
          />
          <s.Input
            name={"city"}
            value={form.city === "" ? form.city = city_ : form.city}
            onChange={onChange}
            placeholder="Cidade"
            required
            type={"text"}
          />
          <s.Input
            name={"state"}
            value={form.state === "" ? form.state = state_ : form.state}
            onChange={onChange}
            placeholder="Estado"
            required
            type={"text"}
          />
          <s.ButtonSave type={'submit'}>Salvar</s.ButtonSave>
        </s.Form>
      </s.Container>
    </s.General>
  )
}