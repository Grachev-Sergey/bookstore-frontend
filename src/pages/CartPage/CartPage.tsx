import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import { CartPageContainer } from './CartPage.styles';

import CartItem from './CartItem';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import userThunks from '../../store/userSlice/userThunks';
import cartApi from '../../api/cartApi';

import type { CartType } from '../../utils/types/cartTypes';

import EmptyCartPage from './EmptyCart/EmptyCart';
import Button from '../../components/Button/Button';

const CartPage: React.FC = () => {
  const userInfo = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const [cart, setCart] = useState<CartType[]>([]);
  const [prise, setPrice] = useState(0);
  const userId = Number(userInfo?.id);

  useEffect(() => {
    (async () => {
      try {
        const cartList = await cartApi.getBooksFromCart(userId);
        setCart(cartList.data.cart);
        const totalPrice = cartList.data.cart.reduce((acc, item) => acc + item.bookPrice, 0);
        setPrice(Number(totalPrice.toFixed(2)));
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const updateItemInCart = (id: number) => {
    const newCart = cart.filter((item) => item.cartId !== id);
    setCart(newCart);
  };

  const setTotalPrice = (bookPrice: number, mathOperation: string) => {
    if (mathOperation === '+') {
      const result = prise + bookPrice;
      setPrice(Number(result.toFixed(2)));
    }
    if (mathOperation === '-') {
      const result = prise - bookPrice;
      setPrice(Number(result.toFixed(2)));
    }
  };

  const emptyTrash = async () => {
    try {
      await cartApi.deleteAllBooksFromCart(userId);
      await dispatch(userThunks.checkUser());
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
        ? <EmptyCartPage />
        : (<CartPageContainer>
            <div className="cart-list">
              {
                cart.map((item) => (
                  <CartItem
                    key={item.bookId}
                    cartItem={item}
                    updateCart={updateItemInCart}
                    setTotalPrice={setTotalPrice}
                  />
                ))
              }
            </div>
            <div className="total-price">
              <p className="total-price__title">Total:</p>
              <p className="total-price__price">{`${prise}`}</p>
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
