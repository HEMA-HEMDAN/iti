import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './component/Products'
import Home from './component/Home'
import Nav from './component/Nav'
import Form from './component/Form'
import Form2 from './component/Form2'
const App = () => {
  return (
    <BrowserRouter>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form2" element={<Form2 />} />
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
