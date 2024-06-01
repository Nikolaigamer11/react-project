import { useState,React }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
// import AuthProvider from './components/AuthProvider';
import SignUp from './components/SignUp';
import Login from './components/Login';

import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import About from './pages/About';





const App = () => {

    return (
        <Router>
            <SignUp/>
           
            <main>
            <Header />
            <Routes><Route path="About" element={<About/>}/>
                    <Route path="/" element={<Home />} />
                    <Route path="Shop" element={<Shop />} />
                    <Route path="Shop/:id" element={<ProductDetails />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
