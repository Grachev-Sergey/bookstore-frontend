export type BookType = {
  id: string;
  cover: string;
  title: string;
  author: string;
  description: string;
  dateOfIssue: string;
  genre: string[];
  hardCover: boolean;
  hardCoverPrice?: string;
  paperback: boolean;
  paperbackPrice?: string;
  status?: string;
  rating?: string;
  comments?: string;
};

export type BooksType = {
  books: BookType[];
};
