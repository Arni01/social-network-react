import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLenght, requiredField } from '../../utils/validators/validator';
import { Input } from '../common/FormControls/FormControls';

const maxLenght20 = maxLenght(20);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="login">Login</label>
        <Field
          id={'login'}
          name={'login'}
          placeholder="Login"
          component={Input}
          validate={[requiredField, maxLenght20]}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field
          id={'password'}
          name={'password'}
          placeholder="Password"
          component={Input}
          validate={[requiredField, maxLenght20]}
        />
      </div>
      <div>
        <Field
          type={'checkbox'}
          id={'remember'}
          component="input"
          name="remember"
        />
        <label htmlFor="remember">remember me</label>
      </div>
      <div>
        <button>Sing in</button>
      </div>
    </form>
  );
};

const LoginReduxFrom = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxFrom onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
