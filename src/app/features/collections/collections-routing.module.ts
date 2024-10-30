import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsPageComponent } from './components/collections-page/collections-page.component';
import { CollectionCreateComponent } from './components/collection-create/collection-create.component';
import { CollectionDetailComponent } from './components/collection-detail/collection-detail.component';

const routes: Routes = [
  { path: '', component: CollectionsPageComponent },
  { path: 'create', component: CollectionCreateComponent },
  { path: ':id', component: CollectionDetailComponent }, // Viewing or editing a specific collection
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
