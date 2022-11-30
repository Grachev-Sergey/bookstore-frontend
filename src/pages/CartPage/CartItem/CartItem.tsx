import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { CartItemContainer } from './CartItem.styles';

import { useAppDispatch } from '../../../store/hooks';
import { removeFromCart } from '../../../store/userSlice';
import cartApi from '../../../api/cartApi';
import type { CartType } from '../../../utils/types/cartTypes';

import trashCan from '../../../assets/icons/trashCan.png';

type PropsType = {
  cartItem: CartType;
  updateCart: (id: number) => void;
  increaseBookPrice: (bookPrice: number) => void;
  subtractBookPrice: (bookPrice: number) => void;
};

const CartItem: React.FC<PropsType> = ({
  cartItem,
  updateCart,
  increaseBookPrice,
  subtractBookPrice,
}) => {
  const [counter, setCounter] = useState(cartItem.numberOfCopies);
  const dispatch = useAppDispatch();

  const deleteBookFromCartHandler = async () => {
    try {
      const removedFromCartItem = await cartApi.deleteBookFromCart({
        cartId: cartItem.id,
      });
      dispatch(removeFromCart(removedFromCartItem.data));
      updateCart(cartItem.id);
    } catch (err) {
      const error = err as Error;
      return toast.error(error.message);
    }
  };

  const increaceNumberOfBooks = async () => {
    setCounter(counter + 1);
    increaseBookPrice(cartItem.price);
    await cartApi.addCopyToCart(cartItem.id);
  };

  const reduceNumberOfBooks = async () => {
    if (counter === 1) {
      return;
    }
    setCounter(counter - 1);
    subtractBookPrice(cartItem.price);
    await cartApi.deleteCopyFromCart(cartItem.id);
  };

  return (
    <CartItemContainer>
      <Link to={`/book/${cartItem.book.id}`}>
        <img className="book-cover" src={cartItem.book.cover} alt="book cover" />
      </Link>
      <div className="cart-item-info">
      <Link to={`/book/${cartItem.book.id}`}>
        <h2 className="cart-item-info__book-title">{cartItem.book.title}</h2>
      </Link>
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
