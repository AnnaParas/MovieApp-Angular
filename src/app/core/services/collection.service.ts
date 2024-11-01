import { Injectable } from '@angular/core';
import { CollectionData } from '../../shared/models/collection-data';
import { Movie } from '../../shared/models/movie-data-results';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  private storageKey = 'movieCollections';
  private collections: CollectionData[] = [];

  getCollections(): any[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  saveCollection(collection: any): void {
    const collections = this.getCollections();
    collections.push(collection);
    localStorage.setItem(this.storageKey, JSON.stringify(collections));
  }

  updateCollection(updatedCollection: any): void {
    const collections = this.getCollections().map((col) =>
      col.id === updatedCollection.id ? updatedCollection : col
    );
    localStorage.setItem(this.storageKey, JSON.stringify(collections));
  }

  deleteCollection(collectionId: number): void {
    const collections = this.getCollections().filter(
      (col) => col.id !== collectionId
    );
    localStorage.setItem(this.storageKey, JSON.stringify(collections));
  }

  addMovieToCollection(collectionId: number, movie: Movie): void {
    const collection = this.collections.find((col) => col.id === collectionId);
    if (collection && !collection.movies.some((m) => m.id === movie.id)) {
      collection.movies.push(movie);
    }
  }

  removeMovieFromCollection(collectionId: number, movieId: number): void {
    const collection = this.collections.find((col) => col.id === collectionId);
    if (collection) {
      collection.movies = collection.movies.filter(
        (movie) => movie.id !== movieId
      );
    }
  }
}
