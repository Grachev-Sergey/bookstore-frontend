import { useState } from 'react';
import { Link } from 'react-router-dom';

import { BookContainer } from './BookItem.styles';

import Button from '../Button';
import RatingElem from '../Rating';

import type { BookType } from '../../utils/types/bookTypes';

import addFavoritesActive from '../../assets/icons/addFavoritesActive.png';
import addFavorites from '../../assets/icons/addFavorites.png';

type PropsType = {
  book: BookType;
};

const BookItem: React.FC<PropsType> = ({ book }) => {
  const [isActiveButton, setIsActiveButton] = useState(false);
  const toggleFavoritButton = () => {
    setIsActiveButton(!isActiveButton);
  };
  return (
    <BookContainer>
      <div className="book__cover">
        <img
          className="favorite-button"
          alt="add favorter button"
          onClick={toggleFavoritButton}
          src={isActiveButton ? addFavoritesActive : addFavorites}
        />
        <Link to={`/book/${book.id}`}>
          <img className="book-cover" src={`${book.cover}`} alt="book cover" />
        </Link>
        {book.status &&
          <div className={`book__status book__status--${book.status}`}>{book.status}</div>
        }
      </div>
      <p className="book__title">{book.title}</p>
      <p className="book__author">{book.author}</p>
      <div className="rating">
        <RatingElem initialValue={book.rating || 0} readOnly />
        <span className="rating__text">{(book.rating || 0).toFixed(1)}</span>
      </div>
      <Button className="add-to-cart-button">$ {book.hardCoverPrice} USD</Button>
    </BookContainer>
  );
};

export default BookItem;
