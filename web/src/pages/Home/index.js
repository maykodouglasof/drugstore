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
      {products.map((product) => (
        <li key={String(product.id)}>
          <img
            src="https://www.doril.com.br/images/novo/produto-doril-dc500.png"
            alt={product.title}
          />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={18} color="#fff" />
              {0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
