import React, { Component } from 'react';
import { CounterLogik } from './CounterLogik';
import { Toggle } from './Toggle';

export class Counter extends Component {
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
