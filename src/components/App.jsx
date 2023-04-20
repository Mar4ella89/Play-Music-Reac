import css from './App.module.css';

export const App = () => {
  const imageUrl =
    'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640';
  const productPrice = 10.99;
  const product = (
    <div className={css.container}>
      <img src={imageUrl} alt="Tacos With Lime" width="640" />
      <h2>Tacos With Lime</h2>
      <p>Price: {productPrice}$</p>
      <button type="button">Add to cart</button>
    </div>
  );

  return <>{product}</>;
};
