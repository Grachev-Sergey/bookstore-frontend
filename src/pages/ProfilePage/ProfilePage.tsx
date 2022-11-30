import React, { useState } from 'react';

import { ProfilePageContainer } from './ProfilePage.styles';

import ProfileAvatar from './ProfileAvatar';
import ProfileInfo from './ProfileInfo';
import ProfilePassword from './ProfilePassword';

const ProfilePage: React.FC = () => {
  const [selectFieldToChange, setSelectFieldToChange] = useState('');

  const changeField = (fieldName: string) => {
    setSelectFieldToChange(fieldName);
  };

  return (
    <ProfilePageContainer>
      <ProfileAvatar />
      <div className="profile-container">
          <div>
            <div className="title-and-change-button">
              <p className="profile-title">Personal information</p>
              <p
                className="change-button"
                onClick={() => setSelectFieldToChange('info')}
              >Change information
              </p>
            </div>
            <ProfileInfo
              changeField={changeField}
              selectFieldToChange={selectFieldToChange}
            />
            <div className="title-and-change-button">
              <p className="profile-title">Password</p>
              <p
                className="change-button"
                onClick={() => setSelectFieldToChange('password')}
              >Change password
              </p>
            </div>
            <ProfilePassword
              changeField={changeField}
              selectFieldToChange={selectFieldToChange}
            />
          </div>
      </div >
    </ProfilePageContainer>
  );
};

export default ProfilePage;
