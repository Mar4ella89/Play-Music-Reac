import React, { Component } from 'react';
import { CounterControls } from './CounterControls';

import css from '../Counter.module.css';

export class CounterLogik extends Component {
  static defaultProps = {
    step: 2,
    initialValue: 0,
  };
  state = {
    value: this.props.initialValue,
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //     this.handleDecrement = this.handleDecrement.bind(this);
  //   }

  handleIncrement = evt => {
    this.setState((prevState, props) => ({
      value: prevState.value + props.step,
    }));

    console.log(evt);
    console.log(this.props.initialValue);
    console.log(this.state);
  };

  handleDecrement = evt => {
    this.setState((prevState, props) => ({
      value: prevState.value - props.step,
    }));
    console.log(evt);
    console.log(this.props);
  };

  render() {
    const { step } = this.props;
    const { value } = this.state;

    return (
      <div className={css.counterWrapper}>
        <span className={css.value}>{value}</span>
        <CounterControls
          onIncrement={this.handleIncrement}
          onDectement={this.handleDecrement}
          step={step}
        />
      </div>
    );
  }
}
