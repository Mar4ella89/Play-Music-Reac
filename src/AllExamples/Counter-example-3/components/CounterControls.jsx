import React from 'react';

import css from '../Counter.module.css';

export const CounterControls = ({ onIncrement, onDectement, step }) => (
  <>
    <button type="button" onClick={onIncrement} className={css.button}>
      Increment by {step}
    </button>
    <button type="button" onClick={onDectement} className={css.button}>
      Decrement by {step}
    </button>
  </>
);
