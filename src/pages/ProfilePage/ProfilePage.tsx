import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ProfilePageContainer } from './ProfilePage.styles';
import Button from '../../components/Button';
import { ProfileInfo } from '../../components/Profile/ProfileInfo';
import { ProfilePassword } from '../../components/Profile/ProfilePassword';
import userThunks from '../../store/slices/user/thunks/index';

const updateUserInfoSchema = yup.object().shape({
  fullName: yup.string().required('Enter your name'),
  email: yup.string().email('Invalid email').required('Enter your email'),
});

const updateUserPassSchema = yup.object().shape({
  password: yup.string()
    .min(6)
    .required('Enter your password'),
  newPassword: yup.string()
    .min(6)
  // yup.string().notOneOf(
    .required('Enter your password'),
  repeatNewPassword: yup.string()
  // повтор
    .required('Repeat your new password without errors'),
});

const UserPage = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user);
  const [selectFieldToChange, setSelectFieldToChange] = useState(' ');

  const formikInfo = useFormik({
    initialValues: { fullName: userInfo?.fullName || '', email: userInfo?.email || '' },
    validationSchema: updateUserInfoSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(userThunks.patchUserInfo(values));
        setSelectFieldToChange(' ');
      } catch (err) {
      // console.log(err)
      }
    },
  });

  const formikPassword = useFormik({
    initialValues: { oldPassword: '', newPassword: '', repeatNewPassword: '' },
    validationSchema: updateUserPassSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(userThunks.patchUserPassword(values)).unwrap();
        setSelectFieldToChange(' ');
      } catch (err) {
        // console.log(err)
      }
    },
  });

  const onSubmitCange = (e: React.FormEvent<HTMLFormElement>) => {
    if (selectFieldToChange === 'info') {
      formikInfo.handleSubmit(e);
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
          <button onClick={() => {}} className={addPhotoButton} />
        </div>
      </div>
      <div className="formСontainer">
        <form onSubmit={onSubmitCange}>
          <div>
            <div className="titleAndChangeButton">
              <p>Personal information</p>
              <p
                className="changeButton"
                onClick={() => setSelectFieldToChange('info')}
              >Change information
              </p>
            </div>
            <ProfileInfo
              selectFieldToChange={selectFieldToChange}
              onChange={formikInfo.handleChange}
              fullName={formikInfo.values.fullName}
              email={formikInfo.values.email}
              errors={formikInfo.errors}
            />
            <div className="titleAndChangeButton">
              <p>Password</p>
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
              repeatNewPassword={formikPassword.values.repeatNewPassword}
              errors={formikPassword.errors}
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

export default UserPage;
