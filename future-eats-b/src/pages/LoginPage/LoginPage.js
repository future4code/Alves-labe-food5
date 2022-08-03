import React, {useContext} from "react";
import * as s from './styled-LoginPage';
import useForm from "./../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import { goToAddressPage, goToFeedPage, goToSignUpPage } from "../../routes/coordinator";
import {useNavigate} from "react-router-dom"

import { GlobalContext } from "../../components/global/GlobalContext";

export default function LoginPage() {
  const navigate = useNavigate()
  const { currentUser, setCurrentUser } = useContext(GlobalContext)

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  })

  const login = (body) => {
    axios.post(`${BASE_URL}/login`, body)
    .then((res)=>{
      setCurrentUser(res.data)
      console.log('retorno do login', res)
      localStorage.setItem("token", res.data.token)
      if (res.data.user.hasAddress) {
        goToFeedPage(navigate)
      } else {
        goToAddressPage(navigate)
      }
    })
    .catch((err)=>{
      console.log("Deu errado o login")
      console.log(err.response.data)
    })
  }

  const register = (event) => {
    event.preventDefault();
    login(form)
    
  }

  return (
    <s.General>
      <s.Container>
        <s.Title>
          <h1>Future Eats</h1>
        </s.Title>

        <s.Title2>
          <h3>Entrar</h3>
        </s.Title2>

        <s.Form onSubmit={register}>
          <s.Input
            name={"email"}
            value={form.email}
            onChange={onChange}
            placeholder="E-mail"
            required
            type={"email"}
          />
          <s.Input
            name={"password"}
            value={form.password}
            onChange={onChange}
            placeholder="Senha"
            required
            type={"password"}
          />
          <s.ButtonLogin type={'submit'}>Continuar</s.ButtonLogin>
        </s.Form>

        <s.Cadastro>
          <s.Text>
            Não possui cadastro?
          </s.Text>
          <s.DivCadastro onClick={()=>goToSignUpPage(navigate)}>
            Clique aqui
          </s.DivCadastro>

        </s.Cadastro>
      </s.Container>
    </s.General>
  )
}