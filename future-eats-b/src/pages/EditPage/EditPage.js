import React, { useContext } from "react";
import * as s from './styled-EditPage';
import useForm from "./../../hooks/useForm";
import axios from "axios";
import { GlobalContext } from "../../components/global/GlobalContext";
import { BASE_URL } from "../../constants/BASE_URL";
import img_buttonBack from "./../../assets/img/buttomBack.png"
import {useNavigate} from "react-router-dom"
import { goToProfilePage } from "../../routes/coordinator";

export default function EditPage() {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const { currentUser } = useContext(GlobalContext)
  console.log("Console Edit Page:", currentUser)

  const { form, onChange, cleanFields } = useForm({
    name: "",
    email: "",
    cpf: "",
  })

  const updateProfile = (body) => {
    axios.put(`${BASE_URL}/profile`, body, {
      headers: {
        auth: token
      }
    })
      .then((res) => {
        console.log("Deu certo o updateProfile", res)
      })
      .catch((err) => {
        console.log("Deu errado o updateProfile")
        console.log(err.response.data)
      })
  }

  const register = (event) => {
    event.preventDefault();
    updateProfile(form)
  }

  return (
    <s.General>
      <s.Container>
        <s.Line1>
          <s.BoxImg>
            <s.ButtonBack src={img_buttonBack} onClick={()=>goToProfilePage(navigate)} alt="Botão voltar" />
          </s.BoxImg>
          <s.Title>Editar</s.Title>
        </s.Line1>
        
        {
          Object.keys(currentUser).length !== 0 ?

            <s.Form onSubmit={register}>
              <s.Input
                name={"name"}
                value={form.name === "" ? form.name = currentUser.name : form.name}
                onChange={onChange}
                placeholder="Nome"
                required
                type={"text"}
              />
              <s.Input
                name={"email"}
                value={form.email === "" ? form.email = currentUser.email : form.email}
                onChange={onChange}
                placeholder="E-mail"
                required
                type={"email"}
              />
              <s.Input
                name={"cpf"}
                value={form.cpf === "" ? form.cpf = currentUser.cpf : form.cpf}
                onChange={onChange}
                placeholder="CPF"
                required
                type={"text"}
              />
              <s.ButtonSave type={'submit'}>Salvar</s.ButtonSave>
            </s.Form>
            : <p>Carregando...</p>
        }
      </s.Container>
    </s.General>
  )
}