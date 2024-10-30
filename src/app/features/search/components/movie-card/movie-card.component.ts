import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;

  ngOnInit() {}

  openMovieDetailsModal(movie: any) {
    console.log('Movie card: ', movie);
  }
}
