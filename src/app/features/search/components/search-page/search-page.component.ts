import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieApiService } from '../../../../core/services/movie-api.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MovieDetailsModalComponent } from '../../../movie-details/components/movie-details-modal/movie-details-modal.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
})
export class SearchPageComponent implements OnInit, OnDestroy {
  searchQuery = '';
  movies: any[] = [];
  currentPage = 1;
  totalPages = 1;
  selectedMovie: any = null;
  private dialogRef: MatDialogRef<MovieDetailsModalComponent> | null = null;
  private unsubscribe$ = new Subject<void>(); // to manage subscriptions

  constructor(
    private router: Router,
    private movieService: MovieApiService,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // Open modal if there is a movie ID in the URL
    this.checkForMovieIdInRoute();

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(() => {
        this.checkForMovieIdInRoute();
      });
  }

  checkForMovieIdInRoute(): void {
    const movieId = this.activatedRoute.snapshot.firstChild?.params['id'];
    if (movieId) {
      console.log('Opening modal for movieId:', movieId); // Debugging statement
      this.openMovieDetailsModal(movieId);
    } else {
      this.closeDialogIfOpen();
    }
  }

  searchMovies() {
    if (this.searchQuery.length < 3) return;
    this.movieService
      .searchMovies(this.searchQuery, this.currentPage)
      .subscribe((data) => {
        this.movies = data.results;
        this.totalPages = data.total_pages;
      });
  }

  onSearchChange() {
    this.searchMovies();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.searchMovies();
  }

  openMovieDetails(movie: any): void {
    // Navigate to the URL with the movie ID before opening the dialog
    this.selectedMovie = movie;
    this.router.navigate(['/movie', movie.id]);
  }

  openMovieDetailsModal(movieId: string) {
    // Close any open dialogs before opening a new one
    this.dialog.closeAll();

    // Open a new modal an store the reference
    this.dialogRef = this.dialog.open(MovieDetailsModalComponent, {
      data: this.selectedMovie,
      width: '600px',
      panelClass: 'custom-modal',
    });

    // When dialog is closed, navigate back to the base URL and reset dialogRef
    this.dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['']);
      this.dialogRef = null;
    });
  }

  closeDialogIfOpen(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  ngOnDestroy(): void {
    // Close dialog if still open
    this.closeDialogIfOpen();

    // Complete the unsubscribe$ subject to avoid memory leaks
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
