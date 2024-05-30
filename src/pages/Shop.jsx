import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    const products = [
        { id: 1, name: 'Product 1', price: '$10' },
        { id: 2, name: 'Product 2', price: '$20' },
        { id: 3, name: 'Product 3', price: '$30' },
    ];

    return (
        <div>
            <h1>Welcome to the shop</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/Shop/${product.id}`}>{product.name}</Link> - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Shop;
