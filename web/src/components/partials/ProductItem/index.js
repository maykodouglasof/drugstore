import React from "react";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { Item } from "./styled";

export default (props) => {
  return (
    <Item>
      <Link to={`/product/${props.data.id}`}>
        <div className="itemImage">
          <img
            src="https://www.doril.com.br/images/novo/produto-doril-dc500.png"
            alt={props.data.title}
          />
        </div>
        <div className="itemName">{props.data.title}</div>
        <div className="itemPrice">R$ {props.data.price}</div>
      </Link>
      <button type="button">
        <div>
          <MdAddShoppingCart size={18} color="#fff" />
          {0}
        </div>
        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </Item>
  );
};
