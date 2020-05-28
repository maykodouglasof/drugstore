import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";
import { login } from "../../services/auth";

import { Form, Container } from "./styles";

export default function Logon() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("/sessions", { email, password });
      login(response.data.token);
      localStorage.setItem('userName', response.data.name);
      history.push("/");
    } catch (err) {
      alert("Falha no login, tente novamente.");
    }
  }

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <strong>Acesse a sua conta</strong>

        <input
          type="email"
          placeholder="Endereço de e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
        <hr />
        <Link to="/signup">Não tem uma conta? Cadastre-se</Link>
      </Form>
    </Container>
  );
}
