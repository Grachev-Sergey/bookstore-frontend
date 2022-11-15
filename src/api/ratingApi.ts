import customAxios from '.';

import type { ResponseRatingType, ChangeRatingType } from '../utils/types/ratingType';

const change = (ratingInfo: ChangeRatingType) => {
  return customAxios.post<ResponseRatingType>('/rating', ratingInfo);
};

export default {
  change,
};
