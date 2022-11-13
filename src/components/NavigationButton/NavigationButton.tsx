import { Link } from 'react-router-dom';

import { NavigationButtonContainer } from './NavigationButton.styles';

const NavigationButton: React.FC = () => {
  return (
    <NavigationButtonContainer>
      <Link to="/user/cart">
        <button className="cart" />
      </Link>
      <Link to="/user/favorites">
        <button className="favorites" />
      </Link>
      <Link to="/user/profile">
        <button className="profile" />
      </Link>
    </NavigationButtonContainer>
  );
};

export default NavigationButton;
