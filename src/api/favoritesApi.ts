import customAxios from '.';

import type { FavoriteBooksType, FavoriteType } from '../utils/types/favoriteType';

const addToFavorites = (favoriteInfo: FavoriteType) => {
  return customAxios.post('/favorite', favoriteInfo);
};

const removeFromFavorites = (favoriteInfo: FavoriteType) => {
  return customAxios.delete('/favorite', { params: favoriteInfo });
};

const getFavorites = (userId: number) => {
  return customAxios.get<FavoriteBooksType[]>('/favorite', { params: { userId } });
};

export default {
  addToFavorites,
  removeFromFavorites,
  getFavorites,
};
