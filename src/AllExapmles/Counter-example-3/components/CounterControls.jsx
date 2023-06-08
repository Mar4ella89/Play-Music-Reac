import React from 'react';

export const CounterControls = ({ onIncrement, onDectement, step }) => (
  <>
    <button type="button" onClick={onIncrement}>
      Increment by {step}
    </button>
    <button type="button" onClick={onDectement}>
      Decrement by {step}
    </button>
  </>
);
