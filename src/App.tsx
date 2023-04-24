import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/statics/navbar/Navbar'
import Footer from './components/statics/footer/Footer'
import Home  from './pages/home/Home'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import ListarCategoria from './components/categoria/listarCategoria/ListarCategoria';
import ListarProdutos from './components/produtos/listarProdutos/ListarProdutos';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
     <Routes> 
      <Route path="/home" element={<Home/>}></Route>
        <Route path="/" element={<Login />} />
     <Route  path="/login" element={<Login />} />
     <Route  path="/cadastro" element={<Cadastro />} />
     <Route path="/categoria" element={<ListarCategoria />} />
     <Route path="/produto" element={<ListarProdutos />} />
    </Routes> 
     <Footer/>
    </BrowserRouter>
  )
}
export default App
