import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated, logout } from "../../../services/auth";
import { MdNotifications, MdPermIdentity } from "react-icons/md";

import DrugStoreLogo from "../../../assets/drugstore-logo.svg";
import Avatar from "../../../assets/avatar.jpg";

import { HeaderArea, LeftContent, RightContent } from "./styled";

const Header = () => {
  let logged = isAuthenticated();

  const userEmail = localStorage.getItem('userEmail');
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <HeaderArea>
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
              <Link to="/my-account">
                <div>
                  <strong>{username}</strong>
                  <small>{userEmail}</small>
                </div>

                <img src={Avatar} alt="Mayko Douglas" />
              </Link>
              <button onClick={handleLogout}>Sair</button>
            </>
          )}
          {!logged && (
            <>
              <Link to="/signin">
                <MdPermIdentity size={24} />
                Entrar
              </Link>
            </>
          )}
        </RightContent>
    </HeaderArea>
  );
};

export default Header;
