export type AddToCartInfoType = {
  bookId?: number;
  userId?: number;
  cover?: string;
};

export type GetBookFromCartType = {
  bookId: number;
  bookCover: string;
  bookTitle: string;
  bookAuthor: string;
  bookPrice: number;
};

export type GetBooksFromCartType = {
  cart: GetBookFromCartType[];
};

export type InfoToDeleteType = {
  bookId: number;
  userId: number;
};
