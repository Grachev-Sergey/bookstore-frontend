import { NavigationButtonContainer } from './NavigationButton.styles';

function NavigationButton() {
  return (
    <NavigationButtonContainer>
      <button className = "cart" />
      <button className = "favorites" />
      <button className = "profile" />
    </NavigationButtonContainer>
  );
}

export default NavigationButton;
