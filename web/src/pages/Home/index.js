import React, { useState, useEffect } from "react";
import { MdAddShoppingCart } from "react-icons/md";

import api from "../../services/api";

import { formatPrice } from "../../utils/format";

import { ProductList } from "./styles";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("products");

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <ProductList>
      <li>
        <img
          src="https://www.doril.com.br/images/produto-doril.png"
          alt="Doril"
        />
        <strong>Doril</strong>
        <span>22</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={18} color="#fff" />
            {0}
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://www.doril.com.br/images/produto-doril.png"
          alt="Doril"
        />
        <strong>Doril</strong>
        <span>22</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={18} color="#fff" />
            {0}
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://www.doril.com.br/images/produto-doril.png"
          alt="Doril"
        />
        <strong>Doril</strong>
        <span>R$ 22,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={18} color="#fff" />
            {0}
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://www.doril.com.br/images/produto-doril.png"
          alt="Doril"
        />
        <strong>Doril</strong>
        <span>22</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
            {0}
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://www.doril.com.br/images/produto-doril.png"
          alt="Doril"
        />
        <strong>Doril</strong>
        <span>22</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
            {0}
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
