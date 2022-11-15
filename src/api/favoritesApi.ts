import customAxios from '.';

import type { FavoriteType } from '../utils/types/favoriteType';

const addToFavorites = (favoriteInfo: FavoriteType) => {
  return customAxios.post('/favorite/add', favoriteInfo);
};

const removeFromFavorites = (favoriteInfo: FavoriteType) => {
  return customAxios.post('/favorite/remove', favoriteInfo);
};

export default {
  addToFavorites,
  removeFromFavorites,
};
