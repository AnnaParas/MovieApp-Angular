import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { MovieApiService } from '../../../../core/services/movie-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RatingService } from '../../../../core/services/rating.service';
import { AddToCollectionComponent } from '../../../collections/components/add-to-collection/add-to-collection.component';
import { CollectionService } from '../../../../core/services/collection.service';
import { CollectionData } from '../../../../shared/models/collection-data';
import {
  EMPTY_MOVIE,
  Movie,
} from '../../../../shared/models/movie-data-results';
import { RatingComponent } from '../../../../shared/components/rating/rating.component';

@Component({
  selector: 'app-movie-details-modal',
  templateUrl: './movie-details-modal.component.html',
  styleUrl: './movie-details-modal.component.css',
})
export class MovieDetailsModalComponent {
  movie: Movie = EMPTY_MOVIE;
  movieLangs: any;

  constructor(
    private movieService: MovieApiService,
    public dialogRef: MatDialogRef<MovieDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private ratingService: RatingService,
    private collectionService: CollectionService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const movieId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.data && this.data.id) {
      this.loadMovieDetails();
    }
  }

  loadMovieDetails() {
    this.movieService.getMovieDetails(this.data.id).subscribe(
      (response) => {
        this.movie = response;
        this.movieLangs = response.spoken_languages;
      },
      (error) => {
        console.error('Error loading movie details:', error);
        alert(error);
      }
    );
  }

  openRatingModal() {
    const dialogRef = this.dialog.open(RatingComponent, {
      data: { movieTitle: this.movie.title },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(`User rated ${this.movie.title}: ${result}`);
        this.ratingService.rateMovie(this.movie.id, result).subscribe(
          (data) => {
            console.log(data);
          },
          (error) => {
            console.error('Error during rating movie:', error);
            alert(error);
          }
        );
      }
    });
  }

  openAddToCollectionDialog(): void {
    const collections = this.collectionService.getCollections();
    const dialog = this.dialog.open(AddToCollectionComponent, {
      width: '500px',
      data: { selectedMovie: this.movie },
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.closeModal();
      }
    });
  }

  closeModal() {
    this.dialogRef.close();
    this.router.navigate([{ outlets: { modal: null } }]);
  }
}
