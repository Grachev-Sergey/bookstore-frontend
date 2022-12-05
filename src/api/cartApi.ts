import customAxios from '.';

import type {
  AddToCartInfoType,
  CartArrayType,
  InfoToDeleteType,
  UserCartType,
  DeletedCartItemType,
} from '../utils/types/cartTypes';

const addToCart = (addToCartInfo: AddToCartInfoType) => {
  return customAxios.post<UserCartType>('/cart', addToCartInfo);
};

const getBooksFromCart = (userId: number) => {
  return customAxios.get<CartArrayType>('/cart', { params: { userId } });
};

const deleteBookFromCart = (query: InfoToDeleteType) => {
  return customAxios.delete<DeletedCartItemType>('/cart', { params: query });
};

const deleteAllBooksFromCart = (userId: number) => {
  return customAxios.delete('/cart/all', { params: { userId } });
};

const addCopyToCart = (id: number) => {
  return customAxios.patch(`/cart/add-copy/${id}`);
};

const deleteCopyFromCart = (id: number) => {
  return customAxios.patch(`/cart/remove-copy/${id}`);
};

export default {
  addToCart,
  getBooksFromCart,
  deleteBookFromCart,
  deleteAllBooksFromCart,
  addCopyToCart,
  deleteCopyFromCart,
};
