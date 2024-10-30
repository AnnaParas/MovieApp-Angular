import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../../core/services/collection.service';

@Component({
  selector: 'app-collections-page',
  templateUrl: './collections-page.component.html',
  styleUrl: './collections-page.component.css',
})
export class CollectionsPageComponent implements OnInit {
  collections: any[] = [];

  constructor(private collectionService: CollectionService) {}

  ngOnInit() {
    this.collections = this.collectionService.getCollections();
  }

  viewCollection(collectionId: number) {
    // Logic to navigate to collection detail view
  }
}
