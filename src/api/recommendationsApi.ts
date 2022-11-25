import customAxios from '.';
import type { RecommendedBookType } from '../utils/types/recommendationsType';

const getRecommendations = (id: number) => {
  return customAxios.get<RecommendedBookType>('/book/recommendations', { params: { id } });
};

export default {
  getRecommendations,
};
