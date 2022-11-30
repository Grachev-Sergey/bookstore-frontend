import { toast } from 'react-toastify';

import { ProfileAvatarContainer } from './ProfileAvatar.styles';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import userThunks from '../../../store/userSlice/userThunks';

const ProfileAvatar: React.FC = () => {
  const userInfo = useAppSelector((state) => state.user.user);
  const userId = Number(userInfo?.id);
  const dispatch = useAppDispatch();

  const uploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files;
    if (selectedFile) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(selectedFile[0]);
      fileReader.onload = async () => {
        try {
          await dispatch(
            userThunks.uploadPhoto({ avatar: fileReader.result, userId }),
          );
        } catch (err) {
          const error = err as Error;
          return toast.error(error.message);
        }
      };
    }
  };

  return (
    <ProfileAvatarContainer>
        {userInfo?.avatar &&
          (<img
            className="avatar"
            src={`${userInfo?.avatar}`}
            alt="User avatar"
          />)}
          <div className="add-photo">
            <input
              className="add-photo__input"
              type="file" accept="image/png, image/jpeg"
              id="photo"
              name="photo"
              onChange={uploadPhoto}
            />
            <label htmlFor="photo" className="add-photo__button" />
          </div>
    </ProfileAvatarContainer>
  );
};

export default ProfileAvatar;
