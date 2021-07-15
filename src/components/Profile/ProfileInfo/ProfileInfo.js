import React from 'react';
import { discriptionBlock } from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <>
      <div>
        <img
          src="https://img.gazeta.ru/files3/845/7947845/upload-shutterstock_117062077-pic905v-895x505-99863.jpg"
          alt="test"
        />
      </div>
      <div className={discriptionBlock}>
        <img
          src={
            props.profile.photos.large ||
            'https://klike.net/uploads/posts/2019-03/1551512888_2.jpg'
          }
          alt={props.profile.fullName}
        />
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </>
  );
};

export default ProfileInfo;
