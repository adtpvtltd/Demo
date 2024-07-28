import React, { useEffect, useState } from 'react';
import axios from 'axios'; // You can use axios for HTTP requests
import ProductItem from './ProductItem'; // Make sure to import your ProductItem component
import './Collection.css';

function TopCollection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://demo.transportservicedelhi.com/wp-json/wc/v3/products', {
          params: {
            consumer_key: 'ck_165fe991afbd95675329f4fa0956affd9c5c0805',
            consumer_secret: 'cs_a6836f82e9e05b92421b7722d77ab49d43a9f668'
          }
        });
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

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
