import customAxios from '.';

import type {
  FavoriteBooksType,
  FavoriteType,
  UserFavoriteType,
  DeletedFavoriteType,
} from '../utils/types/favoriteType';

const addToFavorites = (favoriteInfo: FavoriteType) => {
  return customAxios.post<UserFavoriteType>('/favorite', favoriteInfo);
};

const removeFromFavorites = (favoriteInfo: FavoriteType) => {
  return customAxios.delete<DeletedFavoriteType>('/favorite', { params: favoriteInfo });
};

const getFavorites = (userId: number) => {
  return customAxios.get<FavoriteBooksType[]>('/favorite', { params: { userId } });
};

export default {
  addToFavorites,
  removeFromFavorites,
  getFavorites,
};
