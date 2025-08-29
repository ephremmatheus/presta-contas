import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Home } from './pages/Home.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Login from './pages/Login.jsx'
import Layout from './pages/Layout.jsx'
import Sistema from './pages/Sistema.jsx'
import Prestacao from './pages/Prestacao.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/cadastro' element={<Cadastro />}></Route>
        <Route path="/sistema" element={<Layout />} > 
          <Route index element={<Sistema />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
