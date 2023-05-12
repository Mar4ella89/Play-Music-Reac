import React from 'react';
// import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { object, string, number } from 'yup';
import * as yup from 'yup';
import styled from '@emotion/styled';

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
  `;

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Field
            type="text"
            placeholder="Enter login"
            name="login"
            // value={login}
          />
          <ErrorMessage name="login" component="div" />
        </label>
        <label>
          Email
          <Field
            type="text"
            placeholder="Enter email"
            name="email"
            // value={email}
          />
          <ErrorMessage name="email" component="div" />
        </label>
        <label>
          Password
          <Field
            type="text"
            placeholder="Enter password"
            name="password"
            // value={password}
          />
          <ErrorMessage name="password" component="div" />
        </label>
        <label>
          Agree to terms
          <Field
            type="checkbox"
            name="agreed"
            // checked={agreed}
          />
        </label>

        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <Field
              type="radio"
              checked={gender === 'Gender.male'}
              name="gender"
              value="male"
            />
          </label>
          <label>
            Female
            <Field
              type="radio"
              checked={gender === 'female'}
              name="gender"
              value="female"
            />
          </label>
        </section>

        <label>
          Choose your age
          <Input
            as="select"
            name="age"
            // value={initialValues.age}
          >
            <option value="" disabled>
              Select your age
            </option>
            {age.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
            {/* <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option> */}
          </Input>
        </label>

        <button
          type="submit"
          // disabled={!agreed}
        >
          Sign up as
          {/* {login} */}
        </button>
      </Form>
    </Formik>
  );
};

// state = {
//   ...INITIAL_STATE,
// };

// loginInputId = nanoid();

// // Отвечает за обновление состояния
// handleChange = e => {
//   const { name, value, type, checked } = e.target;
//   // Если тип элемента checkbox, берем значение checked,
//   // в противном случае value
//   setState({ [name]: type === 'checkbox' ? checked : value });
// };

// // Вызывается при отправке формы
// handleSubmit = evt => {
//   const { login, email, password, agreed, age } = this.state;
//   evt.preventDefault();
//   console.log(
//     `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}, Age: ${age}`
//   );

//   // Проп который передается форме для вызова при сабмите
//   this.props.onSubmit({ ...this.state });
//   this.reset();
// };

// reset = () => {
//   this.setState({ ...INITIAL_STATE });
// };

// render() {
//   const { login, email, password, agreed, gender, age } = this.state;

export default SignUpFormFormik;
