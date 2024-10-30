import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  private storageKey = 'movieCollections';

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
}
