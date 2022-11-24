export type GenreType = {
  id: string;
  name: string;
};

export type AllGenreType = {
  genres: GenreType[];
};

export type FilterQueryType = {
  genre: string;
  maxPrice: number;
  minPrice: number;
  sorting: string;
  page: number;
  search: string;
};
