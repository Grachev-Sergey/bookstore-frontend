import React from 'react';
import type { FormikErrors } from 'formik';
import Input from '../Input';
import ProfilePasswordContainer from './ProfileInfo.styles';

type PropsType = {
  onChange?: (e: React.ChangeEvent) => void;
  password?: string;
  newPassword?: string;
  repeatNewPassword?: string;
  selectFieldToChange?: string;
  errors?: FormikErrors<{
    password: string;
    newPassword: string;
    repeatNewPassword: string;
  }>;
} & React.PropsWithChildren;

export const ProfilePassword: React.FC<PropsType> = (props) => {
  return (
    <ProfilePasswordContainer>
      {
        props.selectFieldToChange !== 'password'
          ? (<div className="groupContainer">
          <div className="textContainer">
            {/* картинка глаза как в инпуте */}
            <div className="textBlock"
              id="password"
            >
              <input type="password" disabled value="password" />
            </div>
            <label className="title" htmlFor="password">Password</label>
          </div>
             </div>)
          : (<div className="groupContainer">
          <Input
            onChange={props.onChange}
            value={props.password}
            placeHolder="Password"
            nameInput="password"
            // проброс картинки
            type1="password"
            type2="text"
            error={props.errors?.password}
          />
          <Input
            onChange={props.onChange}
            value={props.newPassword}
            placeHolder="New password"
            nameInput="newPassword"
            // проброс картинки
            type1="password"
            type2="text"
            error={props.errors?.newPassword}
          />
          <Input
            onChange={props.onChange}
            value={props.repeatNewPassword}
            placeHolder="Password replay"
            nameInput="repeatNewPassword"
            // проброс картинки
            type1="password"
            type2="text"
            error={props.errors?.repeatNewPassword}
          />
             </div>)
      }
    </ProfilePasswordContainer>
  );
};
