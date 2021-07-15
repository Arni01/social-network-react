import React from 'react';
import { discriptionBlock, fotosBlock } from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

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
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </>
  );
};

export default ProfileInfo;
