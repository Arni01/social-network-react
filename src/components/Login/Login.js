import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  console.log('rerender');
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="login">Login</label>
        <Field
          id={'login'}
          name={'login'}
          placeholder="Login"
          component="input"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field
          id={'password'}
          name={'password'}
          placeholder="Password"
          component="input"
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
