import React from "react";
import * as s from './styled-SignUpPage';
import useForm from "./../../hooks/useForm";

export default function SignUpPage() {

  const { form, onChange, cleanFields } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  })

  const register = (event) => {
    event.preventDefault();
    console.log('Foi clicacado no botão enviar do cadastro');
  }

  return (
    <s.General>
      <s.Container>
        <s.Title>
          <h1>Future Eats</h1>
        </s.Title>

        <s.Title2>
          <h2>Cadastrar</h2>
        </s.Title2>

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
          <s.Input
            name={"password"}
            value={form.password}
            onChange={onChange}
            placeholder="Senha"
            required
            type={"password"}
          />
          <s.Input
            name={"confirmPassword"}
            value={form.confirmPassword}
            onChange={onChange}
            placeholder="Confirmar Senha"
            required
            type={"password"}
          />
          <s.ButtonSignUp type={'submit'}>Cadastrar</s.ButtonSignUp>
        </s.Form>

      </s.Container>
    </s.General>
  )
}