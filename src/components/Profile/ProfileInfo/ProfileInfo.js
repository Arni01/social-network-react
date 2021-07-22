import React, { useState } from 'react';
import { discriptionBlock, fotosBlock } from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataFrom';

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const handleMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <>
      <div className={fotosBlock}>
        <img
          src="https://img.gazeta.ru/files3/845/7947845/upload-shutterstock_117062077-pic905v-895x505-99863.jpg"
          alt="test"
        />
      </div>
      <div className={discriptionBlock}>
        <img
          src={
            profile.photos.large ||
            'https://klike.net/uploads/posts/2019-03/1551512888_2.jpg'
          }
          alt={profile.fullName}
        />
        {isOwner && (
          <input
            type="file"
            onChange={handleMainPhotoSelected}
            accept="image/*"
          />
        )}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
            falseEditMode={handleEditMode}
          />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            trueEditMode={handleEditMode}
          />
        )}
      </div>
    </>
  );
};

const ProfileData = ({ profile, isOwner, trueEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={trueEditMode}>Edit</button>
        </div>
      )}
      <div>
        <b>Full name:</b> {profile.fullName}
      </div>
      <div>
        <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>Looking for a job description: </b>
          {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me: </b>
        {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:{' '}
        {Object.keys(profile.contacts)
          .filter((key) => {
            return profile.contacts[key] ? true : false;
          })
          .map((key) => (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          ))}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
