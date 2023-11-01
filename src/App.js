import React from 'react'
import './App.css'
import Home from './Home'
import Header from './Layouts/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Category from './Layouts/Category'
import CategoryParent from './CategoryParent'
import Product from './Layouts/Products/Product/Product'
import SingleProduct from './Layouts/Products/Product/SingleProduct'
import Footer from './Layouts/Footer'


function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />}>  </Route>

          <Route exact path='/category' element={<CategoryParent />}>

            <Route exact index element={<Category />} />
            <Route exact path=':id' element={<Product />} />




          </Route>
          <Route exact path='/product/:id' element={<SingleProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>



    </>
  )
}

export default App