import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { MovieDetailsModalComponent } from '../movie-details/components/movie-details-modal/movie-details-modal.component';

const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'movie/:id', component: MovieDetailsModalComponent, outlet: 'modal' }, // Route with movieId triggered from search page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
