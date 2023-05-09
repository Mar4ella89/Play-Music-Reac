import React, { Component } from 'react';

export class CounterLogik extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };
  state = {
    value: this.props.initialValue,
  };

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement(evt) {
    this.setState((state, props) => ({ value: state.value + props.step }));
    console.log(evt);
    console.log(this.props);
  }

  handleDecrement(evt) {
    console.log(evt);
    console.log(this.props);
  }

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}
