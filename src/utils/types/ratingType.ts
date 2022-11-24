export type UserRatingType = {
  id: number;
  bookId?: number;
  userId?: number;
  rating?: number;
};

export type ChangeRatingType = {
  bookId?: number;
  userId?: number;
  rating?: number;
};

export type ResponseRatingType = {
  rating: number;
};
