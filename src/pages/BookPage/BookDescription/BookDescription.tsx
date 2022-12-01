/* eslint-disable no-extra-boolean-cast */
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import classNames from 'classnames';

import { BookDescriptionContainer } from './BookDescription.styles';

import { useAppDispatch } from '../../../store/hooks';
import { addToCart } from '../../../store/userSlice/userSlice';
import cover from '../../../utils/config';
import cartApi from '../../../api/cartApi';
import type { UserType } from '../../../utils/types/userTypes';
import type { BookType } from '../../../utils/types/bookTypes';

import Button from '../../../components/Button';

type PropsType = {
  userInfo: UserType | null;
  book: BookType | null;
  id?: string;
};

const BookDescription: React.FC<PropsType> = ({ userInfo, book, id }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const addToCartHandler = async (cover: string, price: number) => {
    try {
      if (!userInfo?.email) {
        return navigate('/signup');
      }
      const newCartItem = await cartApi.addToCart({
        bookId: Number(id),
        cover,
        price,
        userId: Number(userInfo?.id),
      });
      dispatch(addToCart(newCartItem.data));
    } catch (err) {
      const error = err as Error;
      return toast.error(error.message);
    }
  };

  const hardCoverBookInCart = userInfo?.cart?.find((item) => {
    return item.bookId === Number(book?.id) && item.bookCover === 'hardCover';
  });

  const paperBackBookInCart = userInfo?.cart?.find((item) => {
    return item.bookId === Number(book?.id) && item.bookCover === 'paperBack';
  });

  const paperBackBtnClass = classNames({
    'add-to-cart__button': true,
    'add-to-cart__button--gray': !book?.paperback,
    'add-to-cart__button--added': paperBackBookInCart,
  });

  const hardCovarBtnClass = classNames({
    'add-to-cart__button': true,
    'add-to-cart__button--gray': !book?.hardCover,
    'add-to-cart__button--added': hardCoverBookInCart,
  });

  const getBtnContent = (type:string) => {
    if (type === 'paperback') {
      if (!book?.paperback) {
        return 'Not available';
      }
      if (Boolean(paperBackBookInCart)) {
        return 'Added to cart';
      }
      return `$ ${book?.paperbackPrice} USD`;
    }
    if (!book?.hardCover) {
      return 'Not available';
    }
    if (Boolean(hardCoverBookInCart)) {
      return 'Added to cart';
    }
    return `$ ${book?.hardCoverPrice} USD`;
  };

  const isDisabled = (type: string) => {
    if (type === 'paperback') {
      if (!book?.paperback) {
        return true;
      }
      if (Boolean(paperBackBookInCart)) {
        return true;
      }
      return false;
    }
    if (!book?.hardCover) {
      return true;
    }
    if (Boolean(hardCoverBookInCart)) {
      return true;
    }
    return false;
  };

  return (
    <BookDescriptionContainer>
      <div className="description-and-add-to-cart">
        <div className="description">
          <p className="description__title">Description</p>
          <p className="description__text">{book?.description}</p>
        </div>
        <div className="add-to-cart">
          <div className="cover-selection">
            <p className="cover-selection__title">Paperback</p>
            <Button
              className={paperBackBtnClass}
              isDisabled={isDisabled('paperback')}
              onClick={() => addToCartHandler(cover.paperBack, Number(book?.paperbackPrice))}
            >
              {getBtnContent('paperback')}
            </Button>
          </div>
          <div className="cover-selection cover-selection--hardcover">
            <p className="cover-selection__title">Hardcover</p>
            <Button
              className={hardCovarBtnClass}
              isDisabled={isDisabled('hardCover')}
              onClick={() => addToCartHandler(cover.hardCover, Number(book?.hardCoverPrice))}
            >
              {getBtnContent('hardCover')}
            </Button>
          </div>
        </div>
      </div>
    </BookDescriptionContainer>
  );
};

export default BookDescription;
