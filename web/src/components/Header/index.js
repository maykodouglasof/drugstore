import React from "react";
import { Link } from "react-router-dom";
import { MdNotifications } from "react-icons/md";
import { login, logout } from "../../services/auth";

import DrugStoreLogo from "../../assets/drugstore-logo.svg";
import Avatar from "../../assets/avatar.jpg";

import { Container, Content, LeftContent, RightContent } from "./styled";

const Header = () => {
  let logged = login();

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
          {logged && (
            <>
              <button type="button">
                <MdNotifications size={24} />
              </button>
              <Link to="/">
                <div>
                  <strong>Mayko Douglas</strong>
                  <small>maykodouglasbr@gmail.com</small>
                </div>

                <img src={Avatar} alt="Mayko Douglas" />
              </Link>
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
            </>
          )}
        </RightContent>
      </Content>
    </Container>
  );
};

export default Header;
