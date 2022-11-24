import { Link } from 'react-router-dom';

import { useAppSelector } from '../../store/hooks';
import BookCountIndicator from './BookCountIndicator/BookCountIndicator';

import { NavigationButtonContainer } from './NavigationButton.styles';

const NavigationButton: React.FC = () => {
  const userInfo = useAppSelector((state) => state.user.user);

  return (
    <NavigationButtonContainer>
      <Link to="/user/cart">
        <button className="cart" />
        {Boolean(userInfo?.cart?.length) && <BookCountIndicator counter={userInfo?.cart} />}
      </Link>
      <Link to="/user/favorites">
        <button className="favorites" />
        {Boolean(userInfo?.favorite?.length) && <BookCountIndicator counter={userInfo?.favorite} />}
      </Link>
      <Link to="/user/profile">
        <button className="profile" />
      </Link>
    </NavigationButtonContainer>
  );
};

export default NavigationButton;
