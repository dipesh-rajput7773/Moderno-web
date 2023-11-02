import React from 'react'
import './App.css'
import './responsive.css'
import Home from './Home'
import Header from './Layouts/Header'
import { BrowserRouter, Routes, Route , useParams} from 'react-router-dom'
// import Category from './Layouts/Category'
// import CategoryParent from './CategoryParent'

import SingleProduct from './Layouts/Products/Product/SingleProduct'
import Footer from './Layouts/Footer'
import Product from './Layouts/Products/Product/Product'


function App() {
  const { id } = useParams()
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />}>  </Route>       

            <Route exact path='/category/:categoryname' element={<Product />} />
        
          <Route exact path='/product/:id' element={<SingleProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>



    </>
  )
}

export default App