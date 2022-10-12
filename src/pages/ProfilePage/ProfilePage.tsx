import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ProfilePageContainer } from './ProfilePage.styles';
import Button from '../../components/Button';
import { ProfileInfo } from '../../components/Profile/ProfileInfo';
import { ProfilePassword } from '../../components/Profile/ProfilePassword';
import userThunks from '../../store/userSlice/userThunks';

const updateUserInfoSchema = Yup.object().shape({
  fullName: Yup.string().required('Enter your name'),
  email: Yup.string().email('Invalid email').required('Enter your email'),
});

const updateUserPassSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(6)
    .required('Enter your password'),
  newPassword: Yup.string()
    .min(6, 'must be more than 6 characters')
    .notOneOf([Yup.ref('oldPassword')], 'The new password must not match the old one.')
    .required('Enter new password'),
  repeatedNewPassword: Yup.string()
    .min(6, 'must be more than 6 characters')
    .oneOf([Yup.ref('newPassword')], 'Passwords do not match')
    .required('Repeated new password'),
});

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user);
  const [selectFieldToChange, setSelectFieldToChange] = useState(' ');

  const initialInfoValues = {
    fullName: userInfo?.fullName || '',
    email: userInfo?.email || '',
  };

  const formikUserInfo = useFormik({
    initialValues: initialInfoValues,
    validationSchema: updateUserInfoSchema,
    onSubmit: async (values) => {
      // eslint-disable-next-line no-console
      console.log('запрос info');
      try {
        await dispatch(userThunks.changeUserInfo(values));
        setSelectFieldToChange(' ');
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
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
    validationSchema: updateUserPassSchema,
    onSubmit: async (values) => {
      // eslint-disable-next-line no-console
      console.log('запрос pass');
      try {
        await dispatch(userThunks.changeUserPass(values));
        setSelectFieldToChange(' ');
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
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

  return (
    <ProfilePageContainer>
      <div>
        <div className="avatarContainer">
          {userInfo.avatar &&
            (<img
              className="avatar"
              src={userInfo?.avatar}
              alt={userInfo.avatar}
            />)}
          <button className="addPhotoButton" />
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
              <p className="profileTitle">Password</p>
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
            {selectFieldToChange !== ' ' &&
              <Button type="submit">Confirm</Button>
            }
          </div>
        </form>
      </div >
    </ProfilePageContainer>
  );
};

export default ProfilePage;
