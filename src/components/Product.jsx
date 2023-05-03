import React from 'react';
import PropTypes from 'prop-types';

import css from './Product.module.css';
import { nanoid } from 'nanoid';

const defaultImage =
  'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder';

const Product = ({ allFood }) => {
  return (
    <ul className={css.cardWrapper}>
      {allFood.map(({ imgUrl = defaultImage, name, price, quantity }) => (
        <li key={nanoid()} className={css.card}>
          <div>
            <div className={css.imgWrapper}>
              <img
                src={imgUrl ?? defaultImage}
                alt={name}
                width="640"
                className={css.img}
              />
            </div>
            <div>
              <h2>{name}</h2>
              <p>Price: {price}$</p>
              <h2>Quantity: {quantity < 20 ? 'Few left' : 'In stock'}</h2>
              <button type="button">Add to cart</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

Product.propTypes = {
  allFood: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
};

export default Product;
