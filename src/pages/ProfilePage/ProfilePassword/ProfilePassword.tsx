import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import { ProfilePasswordContainer } from './ProfilePassword.styled';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import userThunks from '../../../store/userSlice/userThunks';
import schemas from '../../../utils/schemas';

import hide from '../../../assets/icons/hide.png';

type PropsType = {
  selectFieldToChange?: string;
  changeField: (fieldName: string) => void;
};

export const ProfilePassword: React.FC<PropsType> = (props) => {
  const userInfo = useAppSelector((state) => state.user.user);
  const userId = Number(userInfo?.id);
  const dispatch = useAppDispatch();
  const initialPassValues = {
    oldPassword: '',
    newPassword: '',
    repeatedNewPassword: '',
    userId,
  };

  const formik = useFormik({
    initialValues: initialPassValues,
    validationSchema: schemas.updateUserPassSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(userThunks.changeUserPass(values)).unwrap();
        await dispatch(userThunks.checkUser());
        props.changeField('');
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    },
  });

  return (
    <ProfilePasswordContainer>
      {props.selectFieldToChange !== 'password'
        ? (<div className="password-container">
          <div className="text__container">
            <img className="info__icon" src={hide} alt="Password icon" />
            <div className="text__block">
            <p>*******</p>
            </div>
            <p className="title">Your password</p>
          </div>
           </div>)
        : (<div className="password-container">
          <form onSubmit={formik.handleSubmit}>
            <Input
              icon={hide}
              id="oldPassword"
              type="password"
              value={formik.values.oldPassword}
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.oldPassword}
              error={formik.errors.oldPassword}
              inputTitle="Enter your old password"
              successMessage="Old password available!"
            />
            <Input
              icon={hide}
              id="newPassword"
              type="password"
              toggleType="text"
              value={formik.values.newPassword}
              placeholder="New password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.newPassword}
              error={formik.errors.newPassword}
              inputTitle="Enter your new password"
              successMessage="New password available!"
            />
            <Input
              icon={hide}
              id="repeatedNewPassword"
              type="password"
              toggleType="text"
              value={formik.values.repeatedNewPassword}
              placeholder="Password replay"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.repeatedNewPassword}
              error={formik.errors.repeatedNewPassword}
              inputTitle="Repeat new password without errors"
              successMessage="Passwords match!"
            />
            {props.selectFieldToChange &&
              <Button className="confirm-button" type="submit">Confirm</Button>
            }
          </form>
           </div>)
      }
    </ProfilePasswordContainer>
  );
};
