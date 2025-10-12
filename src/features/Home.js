
import { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import { AddForm } from "./Product";

let currentProductId = 9;

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get(
        "https://apimocha.com/react-redux-class/products"
      );
      setProducts(res.data);

      
      const maxId = res.data.reduce((m, p) => (p.id > m ? p.id : m), 0);
      if (maxId > currentProductId) currentProductId = maxId;
    }

    getProducts();
  }, []); 

  function addProduct(product) {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts((prev) => [...prev, newProduct]);
  }

  return (
    <div className="container">
      <AddForm addProduct={addProduct} />

      <ul className="Home__products">
        {products.map((p) => (
          <Product key={p.id} item={p} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
