import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

const API_KEY = '85204a8cc33baf447559fb6d51b18313';
const API_URL = 'https://api.themoviedb.org/3';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  constructor(private http: HttpClient) {}

  searchMovies(query: string, page: number = 1): Observable<any> {
    return this.http
      .get(`${API_URL}/search/movie?api_key=${API_KEY}`, {
        params: { query, page: page.toString() },
      })
      .pipe(catchError(this.handleError));
  }

  getMovieDetails(movieId: number): Observable<any> {
    return this.http
      .get(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
}
