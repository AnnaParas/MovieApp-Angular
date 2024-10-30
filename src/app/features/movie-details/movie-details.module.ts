import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MovieDetailsModalComponent } from './components/movie-details-modal/movie-details-modal.component';

@NgModule({
  declarations: [MovieDetailsModalComponent],
  imports: [CommonModule, SharedModule],
})
export class MovieDetailsModule {}
