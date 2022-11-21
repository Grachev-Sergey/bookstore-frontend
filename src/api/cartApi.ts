import customAxios from '.';

import type { AddToCartInfoType, GetBooksFromCartType, InfoToDeleteType } from '../utils/types/cartTypes';

const addToCart = (addToCartInfo: AddToCartInfoType) => {
  return customAxios.post('/cart', addToCartInfo);
};

const getBooksFromCart = (userId: number) => {
  return customAxios.get<GetBooksFromCartType>('/cart', { params: userId });
};

const deleteBookFromCart = (query: InfoToDeleteType) => {
  return customAxios.delete('/cart', { params: query });
};

export default {
  addToCart,
  getBooksFromCart,
  deleteBookFromCart,
};
