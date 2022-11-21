import customAxios from '.';

import type { FavoriteType } from '../utils/types/favoriteType';

const addToFavorites = (favoriteInfo: FavoriteType) => {
  return customAxios.post('/favorite', favoriteInfo);
};

const removeFromFavorites = (favoriteInfo: FavoriteType) => {
  return customAxios.delete('/favorite', { params: favoriteInfo });
};

export default {
  addToFavorites,
  removeFromFavorites,
};
