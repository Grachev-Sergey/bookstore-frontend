import type { FormikErrors, FormikTouched } from 'formik';
import grayProfileIcon from '../../assets/icons/grayProfileIcon.png';
import mail from '../../assets/icons/mail.png';
import Input from '../Input/Input';
import ProfileInfoContainer from './ProfileInfo.styles';

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
        ? (<div className="infoContainer">
            <div className="textContainer">
              <img className="infoIcon" src={grayProfileIcon} alt="Profile icon" />
              <div className="textBlock">
                <p>{props.fullName}</p>
              </div>
              <p className="title">Your name</p>
            </div>
            <div className="textContainer">
              <img className="infoIcon" src={mail} alt="Mail icon" />
              <div className="textBlock">
                <p>{props.email}</p>
              </div>
              <p className="title">Your email</p>
            </div>
           </div>)
        : (<div className="infoContainer">
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
              className="styled-user-page__styled-text-input"
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
