import { useState, useEffect } from 'react';

import GoBackButton from 'components/generic/GoBackButton/GoBackButton';
import { useToggle } from './hooks/useToggle/useToggle';
import { UserProvider } from './hooks/userContext/userContext';
import { UserMenu } from './UserMenu/UserMenu';

import css from './Hooks.module.css';

const Hooks = () => {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const { isOpen, open, close, toggle } = useToggle();

  useEffect(() => {
    document.title = `You clicked ${value} times`;
    console.log(value);
  });

  useEffect(() => {
    console.log(value1);
    console.log('Updating phase: same when componentDidUpdate runs');
  }, [value1]);

  return (
    <UserProvider>
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

        <h2 className={css.title}>Example 3</h2>
        <button className={css.button} onClick={open}>
          Open
        </button>
        <button className={css.button} onClick={close}>
          Close
        </button>
        <button className={css.button} onClick={toggle}>
          Toggle
        </button>
        {isOpen && (
          <div style={{ fontSize: '24px', fontWeight: '600' }}>
            Text visible
          </div>
        )}
        <h2 className={css.title}>Example 4</h2>
        <UserMenu />
      </div>
    </UserProvider>
  );
};

export default Hooks;
