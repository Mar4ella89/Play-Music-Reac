import { useState, useEffect } from 'react';

import GoBackButton from 'components/generic/GoBackButton/GoBackButton';

const Hooks = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${value} times`;
  });

  return (
    <div>
      <GoBackButton path={'/examples'} />
      <p>You clicked {value} times</p>
      <button onClick={() => setValue(value + 1)}>Click me</button>
    </div>
  );
};

export default Hooks;
