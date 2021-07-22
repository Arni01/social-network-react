import { Field, reduxForm } from 'redux-form';
import { requiredField } from '../../../utils/validators/validator';
import { Input, Textarea } from '../../common/FormControls/FormControls';
import { formSummaryError } from '../../common/FormControls/FormControls.module.css';

const ProfileDataForm = ({ handleSubmit, profile, falseEditMode, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {error && <div className={formSummaryError}>{error}</div>}
      <div>
        <button>Save</button>
        <button onClick={falseEditMode}>Cansel</button>
      </div>
      <div>
        <label htmlFor="fullName">Full name:</label>
        <Field
          id={'fullName'}
          name={'fullName'}
          placeholder="Full name"
          component={Input}
          type="text"
          validate={[requiredField]}
        />
      </div>
      <div>
        <b>Looking for a job:</b>{' '}
        <Field
          id={'lookingForAJob'}
          name={'lookingForAJob'}
          component={Input}
          type="checkbox"
        />
      </div>
      <div>
        <b>My professional skills</b>:
        <Field
          id={'lookingForAJobDescription'}
          name={'lookingForAJobDescription'}
          placeholder="looking for a job description"
          component={Textarea}
          type="text"
        />
      </div>
      <div>
        <b>About me</b>:
        <Field
          id={'aboutMe'}
          name={'aboutMe'}
          placeholder="About me"
          component={Textarea}
          type="text"
        />
      </div>

      <div>
        <b>Contacts: </b>
        {Object.keys(profile.contacts).map((key) => (
          <div key={key}>
            <b>{key}:</b>
            <Field
              id={'contacts.' + key}
              name={'contacts.' + key}
              placeholder={key}
              component={Input}
              type="text"
            />
          </div>
        ))}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
