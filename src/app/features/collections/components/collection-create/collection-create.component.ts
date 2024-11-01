// components/collection-create/collection-create.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionService } from '../../../../core/services/collection.service';

@Component({
  selector: 'app-collection-create',
  templateUrl: './collection-create.component.html',
  styleUrl: './collection-create.component.css',
})
export class CollectionCreateComponent {
  title = '';
  description = '';

  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) {}

  createCollection(): void {
    const newCollection = {
      id: Date.now(),
      title: this.title,
      description: this.description,
      movies: [],
    };
    this.collectionService.saveCollection(newCollection);
    this.router.navigate(['/collections']);
  }
}
