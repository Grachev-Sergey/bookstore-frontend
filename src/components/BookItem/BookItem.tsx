import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookContainer } from './BookItem.styles';
import addFavoritesActive from '../../assets/icons/addFavoritesActive.png';
import addFavorites from '../../assets/icons/addFavorites.png';
import type { BookType } from '../../utils/types/bookTypes';
import Button from '../Button/Button';

type PropsType = {
  book: BookType;
};

const BookItem: React.FC<PropsType> = (props) => {
  const [isActiveButton, setIsActiveButton] = useState(false);
  const toggleFavoritButton = () => {
    setIsActiveButton(!isActiveButton);
  };
  return (
    <BookContainer>
      <div className="book__cover">
        <img
          className="favoriteButton"
          alt="remove"
          onClick={toggleFavoritButton}
          src={isActiveButton ? addFavoritesActive : addFavorites}
        />
        <Link to={`/book/${props.book.id}`}>
          <img src={`${props.book.cover}`} alt="book cover" />
        </Link>
        {props.book.status &&
          <div className={`book__status book__status--${props.book.status}`}>{props.book.status}</div>
        }
      </div>
      <p className="book__title">{props.book.title}</p>
      <p className="book__author">{props.book.author}</p>
      <div className="rating">rating</div>
      <Button className="addToCartButton">$ {props.book.hardCoverPrice} USD</Button>
    </BookContainer>
  );
};

export default BookItem;
