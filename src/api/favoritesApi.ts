import customAxios from '.';

import type { FavoriteType } from '../utils/types/favoriteType';

const change = (favoriteInfo: FavoriteType) => {
  return customAxios.post('/favorite', favoriteInfo);
};

export default {
  change,
};
