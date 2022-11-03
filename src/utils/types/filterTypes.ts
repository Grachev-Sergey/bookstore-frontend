export type GenreType = {
  id: string;
  title: string;
  chosenGenre: boolean;
};

export type AllGenreType = {
  genres: GenreType[];
};
