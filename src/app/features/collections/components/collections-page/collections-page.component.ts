import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../../core/services/collection.service';
import { CollectionData } from '../../../../shared/models/collection-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collections-page',
  templateUrl: './collections-page.component.html',
  styleUrl: './collections-page.component.css',
})
export class CollectionsPageComponent implements OnInit {
  collections: CollectionData[] = [];

  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.collections = this.collectionService.getCollections();
  }

  viewCollection(collectionId: number) {
    // Logic to navigate to collection detail view
  }

  // createCollection() {
  //   this.router.navigate;
  // }

  deleteCollection(id: number): void {
    this.collectionService.deleteCollection(id);
    this.collections = this.collectionService.getCollections(); // Refresh list
  }
}
