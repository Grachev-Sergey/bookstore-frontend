import React, { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import { ProfilePageContainer } from './ProfilePage.styles';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import userThunks from '../../store/userSlice/userThunks';
import { baseUrl } from '../../utils/config';
import schemas from '../../utils/schemas';

import Button from '../../components/Button';
import { ProfileInfo } from '../../components/Profile/ProfileInfo';
import { ProfilePassword } from '../../components/Profile/ProfilePassword';

const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user.user);
  const [selectFieldToChange, setSelectFieldToChange] = useState('');

  const initialInfoValues = {
    fullName: userInfo?.fullName || '',
    email: userInfo?.email || '',
  };

  const formikUserInfo = useFormik({
    initialValues: initialInfoValues,
    validationSchema: schemas.updateUserInfoSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(userThunks.changeUserInfo(values)).unwrap();
        setSelectFieldToChange('');
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    },
  });

  const initialPassValues = {
    oldPassword: '',
    newPassword: '',
    repeatedNewPassword: '',
  };

  const formikPassword = useFormik({
    initialValues: initialPassValues,
    validationSchema: schemas.updateUserPassSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(userThunks.changeUserPass(values)).unwrap();
        setSelectFieldToChange('');
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    },
  });

  const onSubmitCange = (e: React.FormEvent<HTMLFormElement>) => {
    if (selectFieldToChange === 'info') {
      formikUserInfo.handleSubmit(e);
    } if (selectFieldToChange === 'password') {
      formikPassword.handleSubmit(e);
    }
  };

  const uploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files;
    if (selectedFile) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(selectedFile[0]);
      fileReader.onload = async () => {
        try {
          await dispatch(userThunks.uploadPhoto({ avatar: fileReader.result }));
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
        <div className="avatarContainer">
          {userInfo?.avatar &&
            (<img
              className="avatar"
              src={`${baseUrl}/${userInfo?.avatar}`}
              alt="User avatar"
            />)}
            <div className="addPhoto">
              <input
                className="addPhoto__input"
                type="file" accept="image/png, image/jpeg"
                id="photo"
                name="photo"
                onChange={uploadPhoto}
              />
              <label htmlFor="photo" className="addPhoto__button" />
            </div>
        </div>
      </div>
      <div className="formContainer">
        <form onSubmit={onSubmitCange}>
          <div>
            <div className="titleAndChangeButton">
              <p className="profileTitle">Personal information</p>
              <p
                className="changeButton"
                onClick={() => setSelectFieldToChange('info')}
              >Change information
              </p>
            </div>
            <ProfileInfo
              selectFieldToChange={selectFieldToChange}
              onChange={formikUserInfo.handleChange}
              fullName={formikUserInfo.values.fullName}
              email={formikUserInfo.values.email}
              errors={formikUserInfo.errors}
              touched={formikUserInfo.touched}
            />
            <div className="titleAndChangeButton">
              <p className="passwordTitle">Password</p>
              <p
                className="changeButton"
                onClick={() => setSelectFieldToChange('password')}
              >Change password
              </p>
            </div>
            <ProfilePassword
              selectFieldToChange={selectFieldToChange}
              onChange={formikPassword.handleChange}
              oldPassword={formikPassword.values.oldPassword}
              newPassword={formikPassword.values.newPassword}
              repeatedNewPassword={formikPassword.values.repeatedNewPassword}
              errors={formikPassword.errors}
              touched={formikPassword.touched}
            />
            {selectFieldToChange &&
              <Button className="confirmButton" type="submit">Confirm</Button>
            }
          </div>
        </form>
      </div >
    </ProfilePageContainer>
  );
};

export default ProfilePage;
