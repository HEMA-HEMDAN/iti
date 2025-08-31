import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './component/Products'
import Home from './component/Home'
import Nav from './component/Nav'
import Form from './component/Form'
const App = () => {
  return (
    <BrowserRouter>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/form" element={<Form />} />
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
