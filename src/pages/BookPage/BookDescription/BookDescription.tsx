import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { BookDescriptionContainer } from './BookDescription.styles';

import { useAppDispatch } from '../../../store/hooks';
import { addToCart } from '../../../store/userSlice/userSlice';
import cover from '../../../utils/config';
import cartApi from '../../../api/cartApi';
import type { UserType } from '../../../utils/types/userTypes';
import type { BookType } from '../../../utils/types/bookTypes';

import Button from '../../../components/Button';

import {
  setClassNameForAddToCartButton,
  getButtonName,
  disableButton,
} from '../../../utils/addToCartButtonInfo';

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
              className={setClassNameForAddToCartButton(book, userInfo, 'paperBack')}
              isDisabled={disableButton(book, userInfo, 'paperBack')}
              onClick={() => addToCartHandler(cover.paperBack, Number(book?.paperbackPrice))}
            >
              {getButtonName(book, userInfo, 'paperBack')}
            </Button>
          </div>
          <div className="cover-selection cover-selection--hardcover">
            <p className="cover-selection__title">Hardcover</p>
            <Button
              className={setClassNameForAddToCartButton(book, userInfo, 'hardCover')}
              isDisabled={disableButton(book, userInfo, 'hardCover')}
              onClick={() => addToCartHandler(cover.hardCover, Number(book?.hardCoverPrice))}
            >
              {getButtonName(book, userInfo, 'hardCover')}
            </Button>
          </div>
        </div>
      </div>
    </BookDescriptionContainer>
  );
};

export default BookDescription;
