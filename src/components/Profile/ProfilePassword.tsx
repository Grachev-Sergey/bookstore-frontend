import React from 'react';
import type { FormikErrors, FormikTouched } from 'formik';
import Input from '../Input';
import ProfilePasswordContainer from './ProfileInfo.styles';
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
        ? (<div className="passwordContainer">
          <div className="textContainer">
            <img className="infoIcon" src={hide} alt="Password icon" />
            <div className="textBlock">
            <p>*******</p>
            </div>
            <p className="title">Your password</p>
          </div>
           </div>)
        : (<div className="passwordContainer">
          <Input
            icon={hide}
            id="oldPassword"
            type="password"
            value={props.oldPassword}
            placeholder="Password"
            onChange={props.onChange}
            error={props.errors?.oldPassword}
            touched={props.touched?.oldPassword}
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
          />
           </div>)
      }
    </ProfilePasswordContainer>
  );
};
