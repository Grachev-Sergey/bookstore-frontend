import type { BookType } from './types/bookTypes';
import type { UserType } from './types/userTypes';

const availabilityInCart = (userInfo: UserType, book: BookType, type: string) => {
  const availability: boolean[] = [];
  userInfo.cart?.forEach((item) => {
    if (!(item.bookId === Number(book.id))) {
      availability.push(false);
    } else if (!(item.bookCover === type)) {
      availability.push(false);
    } else {
      availability.push(true);
    }
  });
  return availability.includes(true);
};

export const setClassNameForAddToCartButton = (
  book: BookType | null,
  userInfo: UserType | null,
  type: string,
) => {
  if (book && userInfo) {
    if (type === 'paperBack') {
      if (!book.paperback) {
        return 'add-to-cart__button add-to-cart__button--gray';
      }
      if (availabilityInCart(userInfo, book, type)) {
        return 'add-to-cart__button add-to-cart__button--added';
      }
      return 'add-to-cart__button';
    }
    if (type === 'hardCover') {
      if (!book.hardCover) {
        return 'add-to-cart__button add-to-cart__button--gray';
      }
      if (availabilityInCart(userInfo, book, type)) {
        return 'add-to-cart__button add-to-cart__button--added';
      }
      return 'add-to-cart__button';
    }
  }
};

export const setValueForAddToCartButton = (
  book: BookType | null,
  userInfo: UserType | null,
  type: string,
) => {
  if (book && userInfo) {
    if (type === 'paperBack') {
      if (!book.paperback) {
        return 'Not available';
      }
      if (availabilityInCart(userInfo, book, type)) {
        return 'Added to cart';
      }
      return `$ ${book?.hardCoverPrice} USD`;
    }
    if (type === 'hardCover') {
      if (!book.hardCover) {
        return 'Not available';
      }
      if (availabilityInCart(userInfo, book, type)) {
        return 'Added to cart';
      }
      return `$ ${book?.hardCoverPrice} USD`;
    }
  }
};

export const disableButton = (
  book: BookType | null,
  userInfo: UserType | null,
  type: string,
) => {
  if (type === 'paperBack') {
    if (!book?.paperback) {
      return true;
    }
    const arr: boolean[] = [];
    userInfo?.cart?.forEach((item) => {
      if (item.bookId === Number(book.id) && item.bookCover === type) {
        arr.push(true);
      }
    });
    if (arr.includes(true)) {
      return true;
    }
    return false;
  }
  if (type === 'hardCover') {
    if (!book?.hardCover) {
      return true;
    }
    const arr: boolean[] = [];
    userInfo?.cart?.forEach((item) => {
      if (item.bookId === Number(book.id) && item.bookCover === type) {
        arr.push(true);
      }
    });
    if (arr.includes(true)) {
      return true;
    }
    return false;
  }
};
