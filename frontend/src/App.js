import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Routes from './routes';

import Header from "./components/partials/Header";

import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
    <GlobalStyles />
    <BrowserRouter>
    <Header />
    <Routes />
    </BrowserRouter>
  </>
  );
}

export default App;
