import React, { useEffect, useState } from 'react';

function FetchApi() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch('https://fakestoreapi.com/products', {
      signal: controller.signal
    })
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('Request cancelled');
        } else {
          console.log(err);
        }
      });

    return () => {
      controller.abort(); // 🔥 cleanup
    };
  }, []);

  return (
    <div>
        <h1>Products</h1>
      {/* {products.map(p => (
        <p key={p.id}>{p.title}</p>
      ))} */}
    </div>
  );
}

export default FetchApi;