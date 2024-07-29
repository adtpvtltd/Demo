import React, { useEffect, useState } from 'react';
import axios from 'axios'; // You can use axios for HTTP requests
import ProductItem from './ProductItem'; // Make sure to import your ProductItem component
import './Collection.css';

function TopCollection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://demo.transportservicedelhi.com/wp-json/wc/v3/products', {
        params: {
          consumer_key: 'ck_6c5111fbc4957b26516abf795ab312ec0021eef1',
          consumer_secret: 'cs_2304491df83d67a41ee1ac642f4e2daddbff9cdb'
        }
      });
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  useEffect(() => {

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  return (
    <div className="container">
      <div className="centered-content">
        <h1>TOP COLLECTION</h1>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s.
        </p>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default TopCollection;
