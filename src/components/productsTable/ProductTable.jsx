import React, { useState } from 'react';
import './productTable.css'; // Add styles here or inline

const productsData = [
  {
    id: 1,
    image: '../../assets/Frame 611.png', // Replace with actual image paths or URLs
    name: 'H1 Gamepad',
    price: 550,
  },
  {
    id: 2,
    image: '../assets/Frame 613.png', // Replace with actual image paths or URLs    
    name: 'LCD Monitor',
    price: 650,
  },
];

const ProductTable = () => {
  const [quantities, setQuantities] = useState(
    productsData.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );

  const handleQuantityChange = (id, delta) => {
    setQuantities(prev => {
      const newQty = Math.max(1, (prev[id] || 1) + delta);
      return { ...prev, [id]: newQty };
    });
  };

  const calculateSubtotal = (id, price) => {
    return (quantities[id] || 1) * price;
  };

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price ($)</th>
          <th>Quantity</th>
          <th>Subtotal ($)</th>
        </tr>
      </thead>
      <tbody>
        {productsData.map(product => (
          <tr key={product.id}>
            <td>
              <div className="product-info">
                <img src={product.image} alt={product.name} />
                <div>
                  {product.name}   
                </div>
              </div>
            </td>
            <td>{product.price.toFixed(2)}</td>
            <td>
              <div className="quantity-control">
                <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                <input
                  type="text"
                  value={quantities[product.id]}
                  readOnly
                />
                <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
              </div>
            </td>
            <td>{calculateSubtotal(product.id, product.price).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
