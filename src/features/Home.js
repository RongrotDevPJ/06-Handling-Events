
import { useState } from "react";
import { AddForm } from "./Product";
import Product from "./Product";
import productsData from "../app/data";

let currentProductId = 9;

function Home() {
  const [products, setProducts] = useState(productsData || []);

  function addProduct(product) {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
  }

  return (
    <>
      <AddForm addProduct={addProduct} />
      <hr />
      <h2>Products</h2>

      {products.length > 0 ? (
        <ul className="Home__products">
          {products.map((p) => (
            <Product key={p.id} item={p} />
          ))}
        </ul>
      ) : (
        <div>Loading products....</div>
      )}
    </>
  );
}

export default Home;
