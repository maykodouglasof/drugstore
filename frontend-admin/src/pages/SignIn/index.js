import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Input } from "@rocketseat/unform";
import * as Yup from "yup";

import logo from "../../assets/white-feather.png";

import { FormContainer } from "../../components/Form";
import Spinner from "../../components/Spinner";

import { Content } from "./styled";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatório"),
  password: Yup.string().required("A senha é obrigatória")
});

export default function SignIn() {
 

  function handleSubmit({ email, password }) {
   
  }

  return (
    <>
      <img className="signIn-logo" src={logo} alt="Universidade Serafine" />

      <Content>
        <h1>Acessar admin Universidade</h1>

        <FormContainer id="submit" schema={schema} onSubmit={handleSubmit}>
          <div>
            <Input name="email" type="email" placeholder="E-mail" />
            <FaEnvelope size={14} />
          </div>
          <div>
            <Input name="password" type="password" placeholder="Senha" />
            <FaLock size={14} />
          </div>

          <Link to="/forgot_password">Esqueci minha senha</Link>

          <button type="submit"><Spinner />Entrar</button>
        </FormContainer>
      </Content>
    </>
  );
}
