import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { SearchRoutingModule } from './search-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [SearchPageComponent, MovieCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SearchRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
})
export class SearchModule {}
