import { useState, useEffect } from 'react';

import GoBackButton from 'components/generic/GoBackButton/GoBackButton';

import css from './Hooks.module.css';

const Hooks = () => {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${value} times`;
  });

  useEffect(() => {
    console.log(value1);
    console.log('Updating phase: same when componentDidUpdate runs');
  }, [value1]);

  return (
    <div>
      <GoBackButton path={'/examples'} />

      <h2 className={css.title}>Example 1</h2>
      <p>You clicked {value} times</p>
      <button className={css.button} onClick={() => setValue(value + 1)}>
        Click me
      </button>

      <h2 className={css.title}>Example 2</h2>
      <button className={css.button} onClick={() => setValue1(value1 + 1)}>
        {value1}
      </button>
    </div>
  );
};

export default Hooks;
