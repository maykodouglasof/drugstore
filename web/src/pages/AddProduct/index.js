import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

import { Form, Container, File } from "./styles";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const history = useHistory();

  const user_id = localStorage.getItem("user_id");

  async function handleNewProduct(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      price,
    };
    try {
      await api.post("products", data, {
        headers: {
          Authorization: user_id,
        },
      });

      history.push("/");
    } catch (err) {
      alert("Erro ao cadastrar produto, tente novamente");
    }
  }

  return (
    <Container>
      <Form onSubmit={handleNewProduct}>
        <strong>Cadastrar Produto</strong>
        <label>Digite o nome do Produto:</label>
        <input
          type="text"
          placeholder="Nome do Produto"
          onChange={e => setTitle(e.target.value)}
        />
        <label>Digite o valor Produto:</label>
        <input
          type="text"
          placeholder="Preço"
          onChange={e => setPrice(e.target.value)}
        />
        <label>Digite a descrição do Produto:</label>
        <input
          type="text"
          placeholder="Descrição"
          onChange={e => setDescription(e.target.value)}
        />

        <div className="actions">
          <button type="submit">Adicionar</button>
          <button className="cancel">
            Cancelar
          </button>
        </div>
      </Form>
    </Container>
  );
}
