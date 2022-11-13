import type { FormikErrors, FormikTouched } from 'formik';

import ProfileInfoContainer from './ProfileInfo.styles';

import Input from '../Input';

import grayProfileIcon from '../../assets/icons/grayProfileIcon.png';
import mail from '../../assets/icons/mail.png';

type PropsType = {
  onChange?: (e: React.ChangeEvent) => void;
  fullName?: string;
  email?: string;
  selectFieldToChange?: string;
  errors?: FormikErrors<{
    fullName: string;
    email: string;
  }>;
  touched?: FormikTouched<{
    fullName: boolean;
    email: boolean;
  }>;
} & React.PropsWithChildren;

export const ProfileInfo: React.FC<PropsType> = (props) => {
  return (
    <ProfileInfoContainer>
      {props.selectFieldToChange !== 'info'
        ? (<div className="info__container">
            <div className="text__container">
              <img className="info__icon" src={grayProfileIcon} alt="Profile icon" />
              <div className="text__block">
                <p>{props.fullName}</p>
              </div>
              <p className="title">Your name</p>
            </div>
            <div className="text__container">
              <img className="info__icon" src={mail} alt="Mail icon" />
              <div className="text__block">
                <p>{props.email}</p>
              </div>
              <p className="title">Your email</p>
            </div>
           </div>)
        : (<div className="info__container">
            <Input
              onChange={props.onChange}
              value={props.fullName}
              placeholder="Your name"
              id="fullName"
              icon={grayProfileIcon}
              type="text"
              error={props.errors?.fullName}
              touched={props.touched?.fullName}
            />
            <Input
              onChange={props.onChange}
              value={props.email}
              placeholder="Email"
              id="email"
              icon={mail}
              type="text"
              error={props.errors?.email}
              touched={props.touched?.email}
            />
           </div>)
      }
    </ProfileInfoContainer>
  );
};
