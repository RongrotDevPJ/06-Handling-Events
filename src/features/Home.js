  import React, { useState, useEffect } from "react";
  import styled from "styled-components";
  import axios from "axios";
  import Product from "./Product";
  import { AddForm } from "./Product";
  import PropTypes from "prop-types";

 

let currentProductId = 9;

function HomeBase({ className }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get("https://apimocha.com/react-redux-class/products");
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

HomeBase.propTypes = {
  className: PropTypes.string,
};


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
