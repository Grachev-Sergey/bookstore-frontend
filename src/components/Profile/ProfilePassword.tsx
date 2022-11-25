import type { FormikErrors, FormikTouched } from 'formik';

import ProfilePasswordContainer from './ProfileInfo.styles';

import Input from '../Input';

import hide from '../../assets/icons/hide.png';

type PropsType = {
  onChange?: (e: React.ChangeEvent) => void;
  oldPassword?: string;
  newPassword?: string;
  repeatedNewPassword?: string;
  selectFieldToChange?: string;
  errors?: FormikErrors<{
    oldPassword: string;
    newPassword: string;
    repeatedNewPassword: string;
}>;
  touched?: FormikTouched<{
    oldPassword: boolean;
    newPassword: boolean;
    repeatedNewPassword: boolean;
  }>;
} & React.PropsWithChildren;

export const ProfilePassword: React.FC<PropsType> = (props) => {
  return (
    <ProfilePasswordContainer>
      {props.selectFieldToChange !== 'password'
        ? (<div className="password__container">
          <div className="text__container">
            <img className="info__icon" src={hide} alt="Password icon" />
            <div className="text__block">
            <p>*******</p>
            </div>
            <p className="title">Your password</p>
          </div>
           </div>)
        : (<div className="password__container">
          <Input
            icon={hide}
            id="oldPassword"
            type="password"
            value={props.oldPassword}
            placeholder="Password"
            onChange={props.onChange}
            error={props.errors?.oldPassword}
            touched={props.touched?.oldPassword}
            inputTitle="Enter your old password"
          />
          <Input
            icon={hide}
            id="newPassword"
            type="password"
            toggleType="text"
            value={props.newPassword}
            placeholder="New password"
            onChange={props.onChange}
            error={props.errors?.newPassword}
            touched={props.touched?.newPassword}
            inputTitle="Enter your new password"
          />
          <Input
            icon={hide}
            id="repeatedNewPassword"
            type="password"
            toggleType="text"
            value={props.repeatedNewPassword}
            placeholder="Password replay"
            onChange={props.onChange}
            touched={props.touched?.repeatedNewPassword}
            error={props.errors?.repeatedNewPassword}
            inputTitle="Repeat new password without errors"
          />
           </div>)
      }
    </ProfilePasswordContainer>
  );
};
