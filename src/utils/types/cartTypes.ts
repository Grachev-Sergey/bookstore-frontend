import type { BookType } from './bookTypes';

export type AddToCartInfoType = {
  bookId?: number;
  userId?: number;
  price?: number;
  cover?: string;
};

export type UserCartType = {
  id: number;
  bookCover: string;
  bookId: number;
  price: number;
  userId: number;
};

export type CartType = {
  id: number;
  bookCover: string;
  bookId: number;
  price: number;
  userId: number;
  book: BookType;
  numberOfCopies: number;
};

export type CartArrayType = {
  cart: CartType[];
};

export type InfoToDeleteType = {
  cartId: number;
};

export type DeletedCartItemType = {
  id?: number;
};
