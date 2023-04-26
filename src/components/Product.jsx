import React from 'react';

import css from './Product.module.css';

const Product = ({ name, imgUrl, price }) => {
  return (
    <div className={css.card}>
      <img src={imgUrl} alt={name} width="640" />
      <h2>{name}</h2>
      <p>Price: {price}$</p>
      <button type="button">Add to cart</button>
    </div>
  );
};

export default Product;
