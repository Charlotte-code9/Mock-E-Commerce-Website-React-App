import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import ProductDetails from './pages/ProductDetails.js';
import Products from './components/Product.js';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Footer from './components/Footer.js';

const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header/>
        <Routes>
            <Route path='/pretty-gal-botique' element={ <Home/>}/>
            <Route path='/product/:id' element={ <ProductDetails/>}/>
            <Route path='/products' element={ <Products/>}/>
        </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
  </div>;
};

export default App;
