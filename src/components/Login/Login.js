import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { requiredField } from '../../utils/validators/validator';
import { Input } from '../common/FormControls/FormControls';
import { login } from '..//..//redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import s from '..//common/FormControls/FormControls.module.css';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {props.error && <div className={s.formSummaryError}>{props.error}</div>}
      <div>
        <label htmlFor="email">Email</label>
        <Field
          id={'email'}
          name={'email'}
          placeholder="email"
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field
          id={'password'}
          name={'password'}
          placeholder="Password"
          component={Input}
          type="password"
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field
          type={'checkbox'}
          id={'rememberMe'}
          component="input"
          name="rememberMe"
        />
        <label htmlFor="rememberMe">Remember me</label>
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
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxFrom onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
