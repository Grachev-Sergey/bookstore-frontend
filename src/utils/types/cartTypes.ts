export type AddToCartInfoType = {
  bookId?: number;
  userId?: number;
  price?: number;
  cover?: string;
};

export type GetBookFromCartType = {
  bookId: number;
  bookCover: string;
  bookTitle: string;
  bookAuthor: string;
  bookPrice: number;
  coverType: string;
};

export type GetBooksFromCartType = {
  cart: GetBookFromCartType[];
};

export type GetBooksFromCartReqType = {
  userId: number;
};

export type InfoToDeleteType = {
  bookId: number;
  userId: number;
};
