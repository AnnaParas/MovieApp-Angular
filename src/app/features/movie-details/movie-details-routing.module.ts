import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsModalComponent } from './components/movie-details-modal/movie-details-modal.component';

const routes: Routes = [{ path: '', component: MovieDetailsModalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieDetailsRoutingModule {}
