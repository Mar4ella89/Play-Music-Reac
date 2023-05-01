import React from 'react';
import PropTypes from 'prop-types';

import css from './Product.module.css';

const Product = ({
  name,
  imgUrl = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  price,
}) => {
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

Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};
