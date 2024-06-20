import React, { useEffect, useState } from 'react';
import { db,collection, getDocs } from '../firebaseConfig';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsList);
      } catch (error) {
        alert('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <div
              className="w-full h-48 mb-4"
              dangerouslySetInnerHTML={{ __html: product.image }}
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="text-lg font-bold mb-4">₹{product.price}</div>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              Sell now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
