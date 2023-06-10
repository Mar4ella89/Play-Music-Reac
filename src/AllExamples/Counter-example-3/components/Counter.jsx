import React, { Component } from 'react';
import { CounterLogik } from './CounterLogik';
import { Toggle } from './Toggle';
import GoBackButton from 'components/generic/GoBackButton/GoBackButton';

class Counter extends Component {
  render() {
    return (
      <>
        <GoBackButton path={'/examples'} />
        <Toggle>
          <CounterLogik initialValue={10} />
        </Toggle>
      </>
    );
  }
}

export default Counter;
