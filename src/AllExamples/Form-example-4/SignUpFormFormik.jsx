import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as yup from 'yup';
import styled from '@emotion/styled';

import css from './SignUpForm.module.css';

const gender = ['female', 'male'];
const age = ['18-25', '26-35', '36+'];

const userSchema = yup.object().shape({
  login: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
  gender: yup.string().oneOf(gender).required('Please enter your gender'),
  age: yup.string().oneOf(age).required('Please enter your age'),
});

const initialValues = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
  age: '',
};

const SignUpFormFormik = () => {
  // Использование styled components с Formik

  const Input = styled(Field)`
    color: blue;
    border: 1px solid blue;
  `;

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <>
      <h2 className={css.title}>Formik form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off" className={css.form}>
          <div className={css.formFieldWrapper}>
            <label htmlFor="login" className={css.lable}>
              <span className={css.fieldName}>Login</span>
              <Field
                className={css.field}
                type="text"
                placeholder="Enter login"
                name="login"
              />
              <ErrorMessage name="login" component="div" />
            </label>
          </div>
          <label className={css.lable}>
            <span className={css.fieldName}>Email</span>

            <Field
              className={css.field}
              type="text"
              placeholder="Enter email"
              name="email"
            />
            <ErrorMessage name="email" component="div" />
          </label>
          <label className={css.lable}>
            <span className={css.fieldName}>Password</span>

            <Field
              className={css.field}
              type="text"
              placeholder="Enter password"
              name="password"
            />
            <ErrorMessage name="password" component="div" />
          </label>
          <label className={css.lable}>
            <span className={css.fieldName}>Agree to terms</span>

            <Field className={css.field} type="checkbox" name="agreed" />
          </label>

          <section>
            <h2>Choose your gender</h2>
            <label className={css.lable}>
              Male
              <Field
                type="radio"
                checked={gender === 'Gender.male'}
                name="gender"
                value="male"
              />
            </label>
            <label className={css.lable}>
              Female
              <Field
                type="radio"
                checked={gender === 'female'}
                name="gender"
                value="female"
              />
            </label>
          </section>

          <label className={css.lable}>
            Choose your age
            <Input as="select" name="age">
              <option value="" disabled>
                Select your age
              </option>
              {age.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </Input>
          </label>

          <button type="submit">Sign up as</button>
        </Form>
      </Formik>
    </>
  );
};

export default SignUpFormFormik;
