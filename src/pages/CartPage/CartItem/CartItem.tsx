import { useState } from 'react';
import { toast } from 'react-toastify';

import { CartItemContainer } from './CartItem.styles';

import { useAppDispatch } from '../../../store/hooks';
import userThunks from '../../../store/userSlice/userThunks';
import cartApi from '../../../api/cartApi';
import type { CartType, InfoToDeleteType } from '../../../utils/types/cartTypes';

import trashCan from '../../../assets/icons/trashCan.png';

type PropsType = {
  cartItem: CartType;
  updateCart: (id: number) => void;
  setTotalPrice: (bookPrice: number, mathOperation: string) => void;
};

const CartItem: React.FC<PropsType> = ({ cartItem, updateCart, setTotalPrice }) => {
  const [counter, setCounter] = useState(1);
  const dispatch = useAppDispatch();

  const deleteBookFromCartHandler = async () => {
    try {
      const query: InfoToDeleteType = {
        cartId: cartItem.id,
      };
      await cartApi.deleteBookFromCart(query);
      await dispatch(userThunks.checkUser());
      updateCart(cartItem.id);
    } catch (err) {
      const error = err as Error;
      return toast.error(error.message);
    }
  };

  const increaceNumberOfBooks = () => {
    setCounter(counter + 1);
    const mathOperation = '+';
    setTotalPrice(cartItem.price, mathOperation);
  };

  const reduceNumberOfBooks = () => {
    if (counter === 1) {
      return;
    }
    setCounter(counter - 1);
    const mathOperation = '-';
    setTotalPrice(cartItem.price, mathOperation);
  };

  return (
    <CartItemContainer>
      <img className="book-cover" src={cartItem.book.cover} alt="book cover" />
      <div className="cart-item-info">
        <h2 className="cart-item-info__book-title">{cartItem.book.title}</h2>
        <p className="cart-item-info__book-author">{cartItem.book.author}</p>
        <p className="cart-item-info__book-cover-type">{cartItem.bookCover === 'hardCover' ? 'Hardcover' : 'Paperback'}</p>
        <div className="counter-block">
          <button
            className="counter-block__button"
          onClick={reduceNumberOfBooks}
          >-
          </button>
          <p className="counter-block__counter">{`${counter}`}</p>
          <button
            className="counter-block__button"
            onClick={increaceNumberOfBooks}
          >+
          </button>
          <img
            className="counter-block__trash-can"
            src={trashCan}
            alt="delete from cart"
            onClick={deleteBookFromCartHandler}
          />
        </div>
        <p className="cart-item-info__price">$ {cartItem.price} USD</p>
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
