import React, { useState } from 'react';

import { ProfilePageContainer } from './ProfilePage.styles';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import userThunks from '../../store/userSlice/userThunks';

import { ProfileInfo } from './ProfileInfo';
import { ProfilePassword } from './ProfilePassword';

const ProfilePage: React.FC = () => {
  const [selectFieldToChange, setSelectFieldToChange] = useState('');
  const userInfo = useAppSelector((state) => state.user.user);
  const userId = Number(userInfo?.id);
  const dispatch = useAppDispatch();

  const changeField = (fieldName: string) => {
    setSelectFieldToChange(fieldName);
  };

  const uploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files;
    if (selectedFile) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(selectedFile[0]);
      fileReader.onload = async () => {
        try {
          await dispatch(userThunks.uploadPhoto({ avatar: fileReader.result, userId }));
          await dispatch(userThunks.checkUser());
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log(err);
        }
      };
    }
  };

  return (
    <ProfilePageContainer>
      <div>
        <div className="avatar-container">
          {userInfo?.avatar &&
            (<img
              className="avatar"
              src={`${userInfo?.avatar}`}
              alt="User avatar"
            />)}
            <div className="add-photo">
              <input
                className="add-photo__input"
                type="file" accept="image/png, image/jpeg"
                id="photo"
                name="photo"
                onChange={uploadPhoto}
              />
              <label htmlFor="photo" className="add-photo__button" />
            </div>
        </div>
      </div>
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
