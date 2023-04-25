import { render } from '@testing-library/react';
import React from 'react';

const Product = () => {
  return (<div>
    <img src={imgUrl} alt={name} width="640" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <button type="button">Add to cart</button>
  </div>;)
};

export default Product;
