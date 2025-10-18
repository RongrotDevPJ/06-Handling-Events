import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Product from "./Product";

function HomeBase({ className, products }) {
  return (
    <div className={className}>
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
  products: PropTypes.array.isRequired,
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
