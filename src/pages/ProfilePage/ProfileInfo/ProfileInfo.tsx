import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import { ProfileInfoContainer } from './ProfileInfo.styles';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import userThunks from '../../../store/userSlice/userThunks';
import schemas from '../../../utils/schemas';

import grayProfileIcon from '../../../assets/icons/grayProfileIcon.png';
import mail from '../../../assets/icons/mail.png';

type PropsType = {
  selectFieldToChange?: string;
  changeField: (fieldName: string) => void;
};

const ProfileInfo: React.FC<PropsType> = (props) => {
  const userInfo = useAppSelector((state) => state.user.user);
  const userId = Number(userInfo?.id);
  const dispatch = useAppDispatch();

  const initialInfoValues = {
    fullName: userInfo?.fullName || '',
    email: userInfo?.email || '',
    userId,
  };

  const formik = useFormik({
    initialValues: initialInfoValues,
    validationSchema: schemas.updateUserInfoSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(userThunks.changeUserInfo(values)).unwrap();
        props.changeField('');
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    },
  });

  return (
    <ProfileInfoContainer>
      {props.selectFieldToChange !== 'info'
        ? (<div className="info-container">
            <div className="text__container">
              <img className="info__icon" src={grayProfileIcon} alt="Profile icon" />
              <div className="text__block">
                <p>{userInfo?.fullName}</p>
              </div>
              <p className="title">Your name</p>
            </div>
            <div className="text__container">
              <img className="info__icon" src={mail} alt="Mail icon" />
              <div className="text__block">
                <p>{userInfo?.email}</p>
              </div>
              <p className="title">Your email</p>
            </div>
           </div>)
        : (<div className="input-container">
            <form onSubmit={formik.handleSubmit}>
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                placeholder="Your name"
                id="fullName"
                icon={grayProfileIcon}
                type="text"
                touched={formik.touched.fullName}
                error={formik.errors.fullName}
                inputTitle="Enter your name"
                successMessage="Name available!"
              />
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Email"
                id="email"
                icon={mail}
                type="text"
                touched={formik.touched.email}
                error={formik.errors.email}
                inputTitle="Enter your email"
                successMessage="Email available!"
              />
              {props.selectFieldToChange &&
                <Button className="confirm-button" type="submit">Confirm</Button>
              }
            </form>
           </div>)
      }
    </ProfileInfoContainer>
  );
};

export default ProfileInfo;
