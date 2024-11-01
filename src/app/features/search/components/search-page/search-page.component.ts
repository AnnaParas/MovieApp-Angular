import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieApiService } from '../../../../core/services/movie-api.service';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailsModalComponent } from '../../../movie-details/components/movie-details-modal/movie-details-modal.component';
import { Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { MovieData } from '../../../../shared/models/movie-data';
import { Movie } from '../../../../shared/models/movie-data-results';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
})
export class SearchPageComponent implements OnInit, OnDestroy {
  searchQuery = '';
  movies: Movie[] = [];
  currentPage = 1;
  totalPages = 1;
  selectedMovie: any = null;
  movie: any;
  movieData$: Observable<MovieData> = new Observable();
  private unsubscribe$ = new Subject<void>(); // to manage subscriptions

  constructor(
    private router: Router,
    private movieService: MovieApiService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  isInputValid(input: string): boolean {
    return input.length >= 3 && /^[a-zA-Z0-9]*$/.test(input);
  }

  searchMovies() {
    this.movieData$ = this.movieService.searchMovies(
      this.searchQuery,
      this.currentPage
    );
    this.movieData$.pipe(takeUntil(this.unsubscribe$)).subscribe(
      (data) => {
        this.movies = data.results;
        this.totalPages = data.total_pages;
      },
      (error) => {
        console.error('Error during movie search:', error);
        alert(error);
      }
    );
  }

  onSearchChange() {
    if (!this.isInputValid(this.searchQuery)) return;
    this.searchMovies();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.searchMovies();
  }

  openMovieDetails(movie: any): void {
    this.router.navigate([{ outlets: { modal: ['movie', movie.id] } }]);

    const dialogRef = this.dialog.open(MovieDetailsModalComponent, {
      data: movie,
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate([{ outlets: { modal: null } }]);
    });
  }

  navigateToCollections() {
    this.router.navigate(['collections']);
  }
}
