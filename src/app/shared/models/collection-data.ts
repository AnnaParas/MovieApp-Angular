import { Movie } from './movie-data-results';

export interface CollectionData {
  id: number;
  title: string;
  description: string;
  movies: Movie[];
}
