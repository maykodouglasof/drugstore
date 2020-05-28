import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchArea, PageArea } from "./styles";
import { MdSearch } from "react-icons/md";

import api from "../../services/api";

import { PageContainer } from "../../components/MainComponents";
import ProductItem from "../../components/partials/ProductItem";

import { formatPrice } from "../../utils/format";

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
            {products.map((i, k) => (
              <ProductItem key={k} data={i} />
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
