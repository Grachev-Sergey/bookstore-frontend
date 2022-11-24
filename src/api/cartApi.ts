import customAxios from '.';

import type { AddToCartInfoType, CartArrayType, InfoToDeleteType } from '../utils/types/cartTypes';

const addToCart = (addToCartInfo: AddToCartInfoType) => {
  return customAxios.post('/cart', addToCartInfo);
};

const getBooksFromCart = (userId: number) => {
  return customAxios.get<CartArrayType>('/cart', { params: { userId } });
};

const deleteBookFromCart = (query: InfoToDeleteType) => {
  return customAxios.delete('/cart', { params: query });
};

const deleteAllBooksFromCart = (userId: number) => {
  return customAxios.delete('/cart/all', { params: { userId } });
};

export default {
  addToCart,
  getBooksFromCart,
  deleteBookFromCart,
  deleteAllBooksFromCart,
};
