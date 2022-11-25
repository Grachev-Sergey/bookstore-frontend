import { Link } from 'react-router-dom';
import { EmptyPageContainer } from './EmptyPage.styles';

import Button from '../../components/Button/Button';

import booksImg from '../../assets/images/books-in-cart.png';

type PropsType = {
  type: string;
};

const EmptyPage: React.FC<PropsType> = ({ type }) => {
  return (
    <EmptyPageContainer type={type}>
      <img className="stack-of-books" src={booksImg} alt="stack of books" />
      <div className="empty-page">
        <h2 className="empty-page__title">Your {type} is empty</h2>
        {type === 'cart' && <p className="empty-page__text">Add items to cart to make a purchase. Go to the catalogue no.</p> }
        <Link to="/">
          <Button className="empty-page__button">Go to catalog</Button>
        </Link>
      </div>
    </EmptyPageContainer>
  );
};

export default EmptyPage;
