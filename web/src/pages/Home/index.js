import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchArea, PageArea, Item } from "./styles";
import { MdSearch, MdAddShoppingCart, MdDelete } from "react-icons/md";

import api from "../../services/api";
import { isAuthenticated } from "../../services/auth";

import { PageContainer } from "../../components/MainComponents";

import { formatPrice } from "../../utils/format";

export default function Home() {
  const [products, setProducts] = useState([]);

  let logged = isAuthenticated();

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

  async function handleDeleteProduct(id) {
    try {
      await api.delete(`products/${id}`);

      setProducts(products.filter((incident) => incident.id !== id));
    } catch (err) {
      alert("Erro ao deletar caso, tente novamente.");
    }
  }

  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="searchBox">
            <form method="GET" action="/products">
              <input type="text" name="q" placeholder="O que você procura?" />
              <button>
                <MdSearch size={30} />
              </button>
            </form>
          </div>
        </PageContainer>
      </SearchArea>
      <PageContainer>
        <PageArea>
          <div className="list">
            {products.map((product) => (
              <Item key={product.id}>
                {logged && (
                <button
                  className="itemDelete"
                  onClick={() => handleDeleteProduct(product.id)}
                  type="button"
                >
                  <MdDelete size={20} color="#a8a8b3" />
                </button>
                )}
                <Link to={`/products/${product.id}`}>
                  <div className="itemImage">
                    <img
                      src="https://www.doril.com.br/images/novo/produto-doril-dc500.png"
                      alt={products.title}
                    />
                  </div>
                  <div className="itemName">{product.title}</div>
                  <div className="itemPrice">{product.priceFormatted}</div>
                </Link>
                <button className="itemCart" type="button">
                  <div>
                    <MdAddShoppingCart size={18} color="#fff" />
                    {0}
                  </div>
                  <span>ADICIONAR AO CARRINHO</span>
                </button>
              </Item>
            ))}
          </div>
          <Link to="/products" className="seeAllLink">
            Ver todos
          </Link>
        </PageArea>
      </PageContainer>
    </>
  );
}
