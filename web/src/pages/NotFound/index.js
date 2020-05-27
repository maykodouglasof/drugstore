import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md';


import NotFound from "../../assets/404-not-found.svg";
import { Container, Content } from "./styles";

const Page = () => {
    return (
        <Container>
        <Content>
            <h2>404</h2>
            <h1>Página não encontrada</h1>
            
            <Link className="back-link" to="/">
                <MdHome syze={24} color="#005aad" />
                Voltar para Página Inicial
            </Link>
            </Content>

            <img src={NotFound} alt="DrugStore" />
            </Container>
    );
}

export default Page;