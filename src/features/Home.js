import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import axios from "axios";
import Product, { AddForm } from "./Product";
const productsData = require("../app/data");

let currentProductId = 9;

function HomeBase({ className }) {
  const [products, setProducts] = useState(productsData);

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get("https://apimocha.com/react-redux-class/products");
      setProducts((prev) => {
        const merged = [...prev, ...res.data];
        const byId = new Map();
        merged.forEach((p) => byId.set(p.id, p));
        return Array.from(byId.values());
      });
      const all = [...productsData, ...res.data];
      const maxId = all.reduce((m, p) => (p.id > m ? p.id : m), 0);
      if (maxId > currentProductId) currentProductId = maxId;
    }
    getProducts();
  }, []);

  function addProduct(product) {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts((prev) => [...prev, newProduct]);
  }

  return (
    <div className={className}>
      <AddForm addProduct={addProduct} />
      <ul className="Home__products">
        {products.map((p) => (
          <Product key={p.id} item={p} />
        ))}
      </ul>
    </div>
  );
}

HomeBase.propTypes = { className: PropTypes.string };

const Home = styled(HomeBase)`
  .Home__products {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin: 0 -12px;
  }
`;

export default Home;
