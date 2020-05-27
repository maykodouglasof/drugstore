import React, { useState } from "react";

import api from "../../services/api";

import { Form, Container } from "./styles";

export default function AddProduct() {
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ files, setFiles ] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { title, description, price, files } = this.state;

      if (!title || !description || !price ) {
        this.setState({ error: "Preencha todos os campos" });
        return;
      }

      const {
        data: { id }
      } = await api.post("/products", {
        title,
        description,
        price,
      });

      if (!files.length) this.props.history.push("/");

      const data = new FormData();
      files.map((file, index) =>
        data.append(`image[${index}]`, file, file.name)
      );

      const config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };

      await api.post(`/products/${id}/images`, data, config);

      this.props.history.push("/");
    } catch (err) {
      this.setState({ error: "Ocorreu algum erro ao adicionar o produto" });
    }
  };

    return (
      <Container>
        <Form>
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


