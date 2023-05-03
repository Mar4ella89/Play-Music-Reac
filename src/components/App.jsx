import Product from './Product';
import css from './App.module.css';

const allFood = [
  {
    id: 1,
    imgUrl:
      'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
    name: 'Tacos With Lime',
    price: 10.99,
    quantity: 65,
  },
  {
    id: 2,
    imgUrl:
      'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640',
    name: 'Fries and Burger',
    price: 14.29,
    quantity: 29,
  },
  { id: 3, name: 'Hot Dog', price: 8.21, quantity: 8, imgUrl: null },
  { id: 4, name: 'Hot Chicken', price: 9.32, quantity: 5, imgUrl: null },
  { id: 5, name: 'Fries', price: 5.28, quantity: 10, imgUrl: null },
  { id: 6, name: 'Cola', price: 3.11, quantity: 18, imgUrl: null },
];

export const App = () => (
  <div className={css.container}>
    <h1>Best selling products</h1>
    <Product allFood={allFood} />
  </div>
);
