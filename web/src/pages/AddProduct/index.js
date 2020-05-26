import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import api from "../../services/api";
import { login } from "../../services/auth";

import { Form, Container } from "./styles";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        login(response.data.token);
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T",
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
        <strong>Cadastrar Produto</strong>
          {this.state.error && <p>{this.state.error}</p>}
          <label>Digite o nome do Produto:</label>
          <input
            type="text"
            placeholder="Nome do Produto"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <label>Digite o valor Produto:</label>
          <input
            type="text"
            placeholder="Preço"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <label>Digite a descrição do Produto:</label>
          <input
            type="text"
            placeholder="Descrição"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <label>Enviar imagem do Produto:</label>
          <input type="file" multiple />
          <button type="submit">Cadastrar Produto</button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignIn);
