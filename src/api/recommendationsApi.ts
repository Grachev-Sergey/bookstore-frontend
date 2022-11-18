import customAxios from '.';
import type { RecommendedBookType, RecommendedQueryType } from '../utils/types/recommendationsType';

const getRecommendations = (query: RecommendedQueryType) => {
  return customAxios.get<RecommendedBookType>('/book/recommendations', { params: query });
};

export default {
  getRecommendations,
};
