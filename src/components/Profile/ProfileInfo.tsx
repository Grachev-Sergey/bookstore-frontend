import React from 'react';
import type { FormikErrors } from 'formik';
// картинка профиля
// картинка письма
import Input from '../Input/Input';
import ProfileInfoContainer from './ProfileInfo.styles';

type PropsType = {
  onChange?: (e: React.ChangeEvent) => void;
  fullName?: string;
  email?: string;
  selectFieldToChange?: string;
  errors?: FormikErrors<{
    email: string;
    fullName: string;
  }>;
} & React.PropsWithChildren;

export const ProfileInfo: React.FC<PropsType> = (props) => {
  return (
    <ProfileInfoContainer>
      {
        props.selectFieldToChange !== 'info'
          ? (<div className="groupContainer">
            <div className="textContainer">
              {/* картинка профиля */}
              <div className="textBlock"
                id="fullName"
              >
                <p>{props.fullName}</p>
              </div>
              <label className="title" htmlFor="fullName">Name</label>
            </div>
            <div className="textContainer">
              {/* картинка письма */}
              <div className="textBlock"
                id="email"
              >
                <p>{props.email}</p>
              </div>
              <label className="title" htmlFor="email" id="email_label">Email</label>
            </div>
             </div>)
          : (<div className="groupContainer">
            <Input
              onChange={props.onChange}
              value={props.fullName}
              placeHolder="Name"
              nameInput="fullName"
              // Icon1={ProfileIcon}
              type1="text"
              error={props.errors?.fullName}
            />
            <Input
              onChange={props.onChange}
              className="styled-user-page__styled-text-input"
              value={props.email}
              placeHolder="Email"
              nameInput="email"
              // Icon1={MailIcon}
              type1="text"
              error={props.errors?.email}
            />
             </div>)
      }
    </ProfileInfoContainer>
  );
};
