import { useState } from 'react';

import { CartItemContainer } from './CartItem.styles';

import type { GetBookFromCartType } from '../../../utils/types/cartTypes';

import trashCan from '../../../assets/icons/trashCan.png';

type CartItemType = {
  cartItem: GetBookFromCartType;
};

const CartItem: React.FC<CartItemType> = ({ cartItem }) => {
  const [counter] = useState(1);

  return (
    <CartItemContainer>
      <img className="book-cover" src={cartItem.bookCover} alt="book cover" />
      <div className="cart-item-info">
        <h2 className="cart-item-info__book-title">{cartItem.bookTitle}</h2>
        <p className="cart-item-info__book-author">{cartItem.bookAuthor}</p>
        <p className="cart-item-info__book-cover-type">{cartItem.coverType === 'hardCover' ? 'Hardcover' : 'Paperback'}</p>
        <div className="counter-block">
          <button className="counter-block__button">-</button>
          <p className="counter-block__counter">{`${counter}`}</p>
          <button className="counter-block__button">+</button>
          <img className="counter-block__trash-can" src={trashCan} alt="delete from cart" />
        </div>
        <p className="cart-item-info__price">$ {cartItem.bookPrice} USD</p>
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
