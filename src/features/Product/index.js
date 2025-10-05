// src/features/Product/index.js  (เฉพาะ Product component ตรงบนสุด)
import React from 'react';
import PropTypes from 'prop-types';

function Product({ item }) {
  let productImage;
  try {
    productImage = require(`../../assets/${item.imageURL}`);
  } catch (e) {
    productImage = item.imageURL;
  }

  return (
    <li className="Products">
      <a href={`/update-product/${item.id}`}>
        <img className="Products__image" src={productImage} alt={item.name} />
        <div className="Products__name">{item.name}</div>
        <small className="Products__type">{item.type}</small>
      </a>
    </li>
  );
}

Product.propTypes = {
  item: PropTypes.object.isRequired
};

export default Product;
export { default as AddForm } from "./AddForm";
