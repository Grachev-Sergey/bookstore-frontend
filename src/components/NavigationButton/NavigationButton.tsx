import { useNavigate } from 'react-router-dom';
import { NavigationButtonContainer } from './NavigationButton.styles';

function NavigationButton() {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate('/cart');
  };

  const goToFavorites = () => {
    navigate('/favorites');
  };

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <NavigationButtonContainer>
      <button onClick={goToCart} className = "cart" />
      <button onClick={goToFavorites} className = "favorites" />
      <button onClick={goToProfile} className = "profile" />
    </NavigationButtonContainer>
  );
}

export default NavigationButton;
