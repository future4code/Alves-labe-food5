import React from "react";
import * as s from './styled-LoginPage';
import useForm from "./../../hooks/useForm";

export default function LoginPage() {

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  })

  const register = (event) => {
    event.preventDefault();
    console.log('Foi clicacado no botão enviar do formulário');
  }

  const botaoCadastrar = () => {
    console.log('O botão de cadastrar foi clicado');
  }

  return (
    <s.General>
      <s.Container>
        <s.Title>
          <h1>Future Eats</h1>
        </s.Title>

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
          <s.DivCadastro onClick={botaoCadastrar}>
            Clique aqui
          </s.DivCadastro>

        </s.Cadastro>
      </s.Container>
    </s.General>
  )
}