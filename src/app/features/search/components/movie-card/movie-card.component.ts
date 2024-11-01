import { Component, Input, OnInit } from '@angular/core';
import { CollectionService } from '../../../../core/services/collection.service';
import { CollectionData } from '../../../../shared/models/collection-data';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;

  ngOnInit(): void {}

  openMovieDetailsModal(movie: any) {}
}
