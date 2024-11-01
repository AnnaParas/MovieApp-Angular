import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css',
})
export class RatingComponent {
  rating: number = 0;

  constructor(
    public dialogRef: MatDialogRef<RatingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  setRating(value: number) {
    this.rating = value;
  }

  submitRating() {
    console.log('Rating submitted:', this.rating);
    this.dialogRef.close(this.rating);
  }

  onClose() {
    this.dialogRef.close();
  }
}
