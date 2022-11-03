import customAxios from '.';
import type { GenreType } from '../utils/types/filterTypes';

const getGenres = () => {
  return customAxios.get<GenreType[]>('/genres');
};
export default {
  getGenres,
};
