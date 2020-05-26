import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated, logout } from "../../services/auth";

import DrugStoreLogo from "../../assets/drugstore-logo.svg";

import { Container, Content, LeftContent, RightContent } from "./styled";

const Header = () => {
  let logged = isAuthenticated();

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <Container>
      <Content>
        <LeftContent>
          <Link to="/">
            <img src={DrugStoreLogo} alt="DrugStore" />
          </Link>
        </LeftContent>

        <RightContent>
          <ul>
            {logged && (
              <>
                <li>
                  <Link to="/my-account">Minha Conta</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Sair</button>
                </li>
                <li>
                  <Link to="/add-product" className="button">
                    Cadastrar um Produto
                  </Link>
                </li>
              </>
            )}
            {!logged && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Cadastrar</Link>
                </li>
                <li>
                  <Link to="/add-product" className="button">
                    Cadastrar um Produto
                  </Link>
                </li>
              </>
            )}
          </ul>
        </RightContent>
      </Content>
    </Container>
  );
};

export default Header;
