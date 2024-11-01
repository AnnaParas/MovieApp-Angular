import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsPageComponent } from './components/collections-page/collections-page.component';
import { CollectionCreateComponent } from './components/collection-create/collection-create.component';
import { CollectionDetailComponent } from './components/collection-detail/collection-detail.component';
import { AddToCollectionComponent } from './components/add-to-collection/add-to-collection.component';
import { CollectionsRoutingModule } from './collections-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CollectionsPageComponent,
    CollectionCreateComponent,
    CollectionDetailComponent,
    AddToCollectionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CollectionsRoutingModule,
  ],
})
export class CollectionsModule {}
