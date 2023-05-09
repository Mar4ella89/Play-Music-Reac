import React, { Component } from 'react';
import { CounterLogik } from './CounterLogik';
import { Toggle } from './Toggle';

export class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  render() {
    return (
      <>
        <Toggle>
          <CounterLogik initialValue={10} />
        </Toggle>
      </>
    );
  }
}
