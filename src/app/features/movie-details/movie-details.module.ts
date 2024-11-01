import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MovieDetailsModalComponent } from './components/movie-details-modal/movie-details-modal.component';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [MovieDetailsModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    MovieDetailsRoutingModule,
    MatDialogModule,
  ],
})
export class MovieDetailsModule {}
