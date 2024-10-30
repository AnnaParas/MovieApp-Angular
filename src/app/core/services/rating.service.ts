import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '85204a8cc33baf447559fb6d51b18313';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  private guestSessionId: string = '';

  constructor(private http: HttpClient) {}

  // Fetch guest session ID if it's not already available
  private getGuestSessionId(): Observable<string> {
    if (this.guestSessionId) {
      return new Observable((observer) => observer.next(this.guestSessionId));
    } else {
      return this.http
        .get<{ guest_session_id: string }>(
          `${API_URL}/authentication/guest_session/new`,
          {
            params: { api_key: API_KEY },
          }
        )
        .pipe(
          map((response) => {
            this.guestSessionId = response.guest_session_id;
            return this.guestSessionId;
          })
        );
    }
  }

  // Rate a movie with a score between 0.5 and 10.0 (step 0.5)
  rateMovie(movieId: number, rating: number): Observable<any> {
    return this.getGuestSessionId().pipe(
      switchMap((sessionId) => {
        return this.http.post(
          `${API_URL}/movie/${movieId}/rating`,
          { value: rating },
          {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            params: { api_key: API_KEY, guest_session_id: sessionId },
          }
        );
      })
    );
  }
}
