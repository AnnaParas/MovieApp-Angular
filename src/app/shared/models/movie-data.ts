import { Movie } from './movie-data-results';

export interface MovieData {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
