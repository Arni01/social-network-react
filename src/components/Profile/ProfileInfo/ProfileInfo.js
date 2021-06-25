import React from 'react';
import { discriptionBlock } from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <>
      <div>
        <img src="https://img.gazeta.ru/files3/845/7947845/upload-shutterstock_117062077-pic905v-895x505-99863.jpg" />
      </div>
      <div className={discriptionBlock}>ava + description</div>
    </>
  );
};

export default ProfileInfo;
