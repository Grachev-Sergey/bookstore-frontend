import { EmptyCartPageContainer } from './EmptyCart.styles';

import Button from '../../../components/Button';

import booksImg from '../../../assets/images/books-in-cart.png';

const EmptyCartPage: React.FC = () => {
  return (
    <EmptyCartPageContainer>
      <img className="stack-of-books" src={booksImg} alt="stack of books" />
      <div className="cart-info">
        <h2 className="cart-info__title">Your cart is empty</h2>
        <p className="cart-info__text">Add items to cart to make a purchase. Go to the catalogue no.</p>
        <Button className="cart-info__button">Go to catalog</Button>
      </div>
    </EmptyCartPageContainer>
  );
};

export default EmptyCartPage;
