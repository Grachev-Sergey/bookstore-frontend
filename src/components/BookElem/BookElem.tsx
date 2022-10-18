import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookContainer } from './BookElem.styles';
import addFavoritesActive from '../../assets/icons/addFavoritesActive.png';
import addFavorites from '../../assets/icons/addFavorites.png';
import type { BookType } from '../../utils/types/bookTypes';
import { booksCoverUrl } from '../../utils/config';
import Button from '../Button/Button';

type PropsType = {
  book: BookType;
};

const BookElem: React.FunctionComponent<PropsType> = (props) => {
  const [isActiveButton, setIsActiveButton] = useState(false);
  const toggleFavoritButton = () => {
    setIsActiveButton(!isActiveButton);
  };
  return (
    <BookContainer>
      <div className="book__cover">
        {isActiveButton
          ? (<img
            className="favoriteButton"
            src={addFavoritesActive}
            alt="remove"
            onClick={toggleFavoritButton}
          />)
          : (<img
            className="favoriteButton"
            src={addFavorites}
            alt="add favorites button"
            onClick={toggleFavoritButton}
          />)
        }
        <Link to={`/book/${props.book.id}`}>
          <img src={`${booksCoverUrl}/${props.book.cover}`} alt="book cover" />
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

export default BookElem;
