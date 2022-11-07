import customAxios from '.';
import type { AllGenreType } from '../utils/types/filterTypes';

const getGenres = () => {
  return customAxios.get<AllGenreType>('/genres');
};
export default {
  getGenres,
};
