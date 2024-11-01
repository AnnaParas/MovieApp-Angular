// components/add-to-collection-dialog/add-to-collection-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CollectionData } from '../../../../shared/models/collection-data';
import { Movie } from '../../../../shared/models/movie-data-results';
import { CollectionService } from '../../../../core/services/collection.service';
@Component({
  selector: 'app-add-to-collection',
  templateUrl: './add-to-collection.component.html',
  styleUrl: './add-to-collection.component.css',
})
export class AddToCollectionComponent {
  collections: CollectionData[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { selectedMovie: Movie },
    private collectionService: CollectionService,
    private dialogRef: MatDialogRef<AddToCollectionComponent>
  ) {
    this.collections = this.collectionService.getCollections();
  }

  addToCollection(collectionId: number): void {
    const collection = this.collections.find((c) => c.id === collectionId);
    if (collection) {
      if (!collection.movies.some((m) => m.id === this.data.selectedMovie.id)) {
        collection.movies.push(this.data.selectedMovie);
      }
      this.collectionService.updateCollection(collection);
    }
    this.dialogRef.close();
  }
}
