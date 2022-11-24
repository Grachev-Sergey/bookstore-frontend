import type { BookType } from './bookTypes';

export type AddToCartInfoType = {
  bookId?: number;
  userId?: number;
  price?: number;
  cover?: string;
};

export type CartType = {
  bookId: number;
  bookPrice: number;
  coverType: string;
  cartId: number;
  userId: number;
  book: BookType;
};

export type CartArrayType = {
  cart: CartType[];
};

export type InfoToDeleteType = {
  cartId: number;
};
