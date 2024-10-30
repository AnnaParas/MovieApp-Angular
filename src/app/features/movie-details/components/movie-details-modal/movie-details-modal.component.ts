import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MovieApiService } from '../../../../core/services/movie-api.service';

@Component({
  selector: 'app-movie-details-modal',
  templateUrl: './movie-details-modal.component.html',
  styleUrl: './movie-details-modal.component.css',
})
export class MovieDetailsModalComponent implements OnInit {
  movie: any | null = null;

  constructor(
    private movieService: MovieApiService,
    public dialogRef: MatDialogRef<MovieDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data && this.data.id) {
      this.movieService.getMovieDetails(this.data.id).subscribe(
        (response) => {
          console.log('Movie details loaded:', response); // Log response
          this.movie = response;
        },
        (error) => {
          console.error('Error loading movie details:', error); // Log error if any
        }
      );
    }
  }

  closeModal() {
    this.dialogRef.close();
  }
}
