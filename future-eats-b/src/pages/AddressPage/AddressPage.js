import React from "react";
import * as s from './styled-AddressPage';
import useForm from "./../../hooks/useForm";

export default function AddressPage() {

  const { form, onChange, cleanFields } = useForm({
    street: "",
    number: "",
    complement: "",
    neighbourhood: "",
    city: "",
    state: "",
  })

  const register = (event) => {
    event.preventDefault();
    console.log('Foi clicacado no botão enviar do endereço');
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
            value={form.street}
            onChange={onChange}
            placeholder="Logradouro"
            required
            type={"text"}
          />
          <s.Input
            name={"number"}
            value={form.number}
            onChange={onChange}
            placeholder="Número"
            required
            type={"number"}
          />
          <s.Input
            name={"complement"}
            value={form.complement}
            onChange={onChange}
            placeholder="Complemento"
            type={"text"}
          />
          <s.Input
            name={"neighbourhood"}
            value={form.neighbourhood}
            onChange={onChange}
            placeholder="Bairro"
            required
            type={"text"}
          />
          <s.Input
            name={"city"}
            value={form.city}
            onChange={onChange}
            placeholder="Cidade"
            required
            type={"text"}
          />
          <s.Input
            name={"state"}
            value={form.state}
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