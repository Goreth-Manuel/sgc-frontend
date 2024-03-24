import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useAuth } from "./core/zustand/auth";
import { LocalStorage, LOCAL_STORAGE_TOKEN_KEY } from "./utils/localStorage";

import Cadastro from "./pages/Cadastro";
import Home from "./pages/home";
import Inscricao from "./pages/Inscricao";
import Alimentacao from "./pages/alimentacao";
import Matricula from "./pages/Matricula";
import Galeria from "./pages/Galeria";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";

function AppRoutes() {
  const { setIsAuth, isAuth } = useAuth((state) => state);

  useEffect(() => {
    const data = LocalStorage.get(LOCAL_STORAGE_TOKEN_KEY);

    if (data?.token) {
      setIsAuth(true);
    }
  }, []);

  const PrivateRouter = () => {
    localStorage.getItem("token");
  };

  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </>

          {<Route path="/inscricao" element={<Inscricao />} />}
          <Route path="*" element={<Navigate to="/" />} /> 

          {<Route path="/matricula/:id" element={<Matricula />} />}
          <Route path="*" element={<Navigate to="/" />} /> 

          {<Route path="/galeria" element={<Galeria />} />}
          <Route path="*" element={<Navigate to="/" />} />

          {<Route path="/alimentacao" element={<Alimentacao />} />}
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}
export default AppRoutes;
