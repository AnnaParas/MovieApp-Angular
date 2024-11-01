// components/collection-details/collection-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionData } from '../../../../shared/models/collection-data';
import { CollectionService } from '../../../../core/services/collection.service';
import { Movie } from '../../../../shared/models/movie-data-results';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrl: './collection-detail.component.css',
})
export class CollectionDetailComponent implements OnInit {
  collection: CollectionData | undefined;

  constructor(
    private route: ActivatedRoute,
    private collectionService: CollectionService
  ) {}

  ngOnInit(): void {
    const collectionId = Number(this.route.snapshot.paramMap.get('id'));
    this.collection = this.collectionService
      .getCollections()
      .find((col) => col.id === collectionId);
  }

  removeMovie(movie: Movie): void {
    if (this.collection) {
      this.collection.movies = this.collection.movies.filter(
        (m) => m.id !== movie.id
      );
      this.collectionService.updateCollection(this.collection);
    }
  }
}
