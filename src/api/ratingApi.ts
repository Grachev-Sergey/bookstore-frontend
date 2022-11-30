import customAxios from '.';

import type { UserRatingType, ChangeRatingType } from '../utils/types/ratingType';

const change = (ratingInfo: ChangeRatingType) => {
  return customAxios.post<UserRatingType>('/rating', ratingInfo);
};

export default {
  change,
};
