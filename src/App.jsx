import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

const App = () => {
    return (
        <Router>
            <main>
            <Header />
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="Shop" element={<Shop />} />
                    <Route path="Shop/:id" element={<ProductDetails />} />
                    <Route path="cart" element={<Cart />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
