import React, { Component } from 'react';

import SignUpFormLight from './SignUpFormLight';
import SignUpFormFull from './SignUpFormFull';

class SignUpForm extends Component {
  render() {
    return (
      <>
        <SignUpFormLight onSubmit={values => console.log(values)} />
        <SignUpFormFull onSubmit={values => console.log(values)} />
      </>
    );
  }
}

export default SignUpForm;
