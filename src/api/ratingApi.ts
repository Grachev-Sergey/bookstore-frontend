import customAxios from '.';

import type { ChangeRatingType } from '../utils/types/ratingType';

const change = (ratingInfo: ChangeRatingType) => {
  return customAxios.put('/rating', ratingInfo);
};

export default {
  change,
};
