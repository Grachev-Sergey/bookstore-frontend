import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import { CartPageContainer } from './CartPage.styles';

import CartItem from './CartItem';
import EmptyPage from '../EmptyPage';
import Button from '../../components/Button';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeAllFromCart } from '../../store/userSlice';
import cartApi from '../../api/cartApi';

import type { CartType } from '../../utils/types/cartTypes';

const CartPage: React.FC = () => {
  const userInfo = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const [cart, setCart] = useState<CartType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const userId = Number(userInfo?.id);

  useEffect(() => {
    (async () => {
      try {
        const cartList = await cartApi.getBooksFromCart(userId);
        setCart(cartList.data.cart);
        const price = cartList.data.cart.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(Number(price.toFixed(2)));
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const removeItemFromCart = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const increaseBookPrice = (bookPrice: number) => {
    const result = totalPrice + bookPrice;
    setTotalPrice(Number(result.toFixed(2)));
  };

  const subtractBookPrice = (bookPrice: number) => {
    const result = totalPrice - bookPrice;
    setTotalPrice(Number(result.toFixed(2)));
  };

  const emptyTrash = async () => {
    try {
      await cartApi.deleteAllBooksFromCart(userId);
      dispatch(removeAllFromCart());
      setCart([]);
    } catch (err) {
      const error = err as Error;
      return toast.error(error.message);
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!cart.length
        ? <EmptyPage type="cart" />
        : (<CartPageContainer>
            <div className="cart-list">
              {
                cart.map((item) => (
                  <CartItem
                    key={item.bookId}
                    cartItem={item}
                    updateCart={removeItemFromCart}
                    increaseBookPrice={increaseBookPrice}
                    subtractBookPrice={subtractBookPrice}
                  />
                ))
              }
            </div>
            <div className="total-price">
              <p className="total-price__title">Total:</p>
              <p className="total-price__price">{`${totalPrice}`}</p>
            </div>
            <div className="buttons-block">
              <Link to="/">
                <Button className="buttons-block__continue-shopping button">Continue shopping</Button>
              </Link>
              <Button className="buttons-block__chekout button" onClick={emptyTrash}>Chekout</Button>
            </div>
           </CartPageContainer>
        )
      }
    </>
  );
};

export default CartPage;
