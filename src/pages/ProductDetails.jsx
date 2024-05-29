import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const product = { id, name: `Product ${id}`, price: `$${id}0`, description: `Description of Product ${id}` };

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetails;
