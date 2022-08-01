import React from "react";
import * as s from './styled-EditPage';
import useForm from "./../../hooks/useForm";

export default function EditPage() {

  const { form, onChange, cleanFields } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  })

  const register = (event) => {
    event.preventDefault();
    console.log('Foi clicacado no botão salvar do editar');
  }

  return (
    <s.General>
      <s.Container>
        <s.Title>
          <h3>Editar</h3>
        </s.Title>

        <s.Form onSubmit={register}>
          <s.Input
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder="Nome"
            required
            type={"text"}
          />
          <s.Input
            name={"email"}
            value={form.email}
            onChange={onChange}
            placeholder="E-mail"
            required
            type={"email"}
          />
          <s.Input
            name={"cpf"}
            value={form.cpf}
            onChange={onChange}
            placeholder="CPF"
            required
            type={"number"}
          />
          <s.ButtonSave type={'submit'}>Salvar</s.ButtonSave>
        </s.Form>

      </s.Container>
    </s.General>
  )
}