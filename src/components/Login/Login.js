import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { requiredField } from '../../utils/validators/validator';
import { Input } from '../common/FormControls/FormControls';
import { login } from '..//..//redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import { formSummaryError } from '..//common/FormControls/FormControls.module.css';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {error && <div className={formSummaryError}>{error}</div>}
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
      {captchaUrl && (
        <div>
          <label htmlFor="captcha">
            <img src={captchaUrl} alt="captcha" />
          </label>
          <Field
            id={'captcha'}
            name={'captcha'}
            placeholder="Enter a code"
            component={Input}
            type="text"
            validate={[requiredField]}
          />
        </div>
      )}
      <div>
        <button>Sing in</button>
      </div>
    </form>
  );
};

const LoginReduxFrom = reduxForm({
  form: 'login',
})(LoginForm);

const Login = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = (formData) => {
    login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxFrom onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
