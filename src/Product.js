import React from 'react';
import './product.css';

function Product() {
  return (
    <div className="container">
      <h1>CSS Positioning Task</h1>
      
      <div className="card">
 
        <img src="https://tse4.mm.bing.net/th?id=OIP.x72fMuCo0JG70mu_hYfqtQHaGF&pid=Api&P=0&h=180" alt="Product" />
        <h3>Product Name</h3>
        <p className="price">$99.99</p>
      </div>

    </div>
  );
}

export default Product;