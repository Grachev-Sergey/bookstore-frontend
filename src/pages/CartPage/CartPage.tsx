import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { CartPageContainer } from './CartPage.styles';

import CartItem from './CartItem';

import cartApi from '../../api/cartApi';
import { useAppSelector } from '../../store/hooks';

import type { GetBookFromCartType } from '../../utils/types/cartTypes';
import EmptyCartPage from './EmptyCart/EmptyCart';
import Button from '../../components/Button/Button';

const CartPage: React.FC = () => {
  const userInfo = useAppSelector((state) => state.user.user);
  const userId = Number(userInfo?.id);
  const [cart, setCart] = useState<GetBookFromCartType[]>([]);
  const [prise] = useState(34.98);

  useEffect(() => {
    (async () => {
      try {
        const cartList = await cartApi.getBooksFromCart({ userId });
        setCart(cartList.data.cart);
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    })();
  }, [userId]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!cart.length
        ? <EmptyCartPage />
        : (<CartPageContainer>
            <div className="cart-list">
              {
                cart.map((item) => (
                  <CartItem key={item.bookId} cartItem={item} />
                ))
              }
            </div>
            <div className="total-price">
              <p className="total-price__title">Total:</p>
              <p className="total-price__price">{`${prise}`}</p>
            </div>
            <div className="buttons-block">
              <Button className="buttons-block__continue-shopping button">Continue shopping</Button>
              <Button className="buttons-block__chekout button">Chekout</Button>
            </div>
           </CartPageContainer>
        )
      }
    </>
  );
};

export default CartPage;
