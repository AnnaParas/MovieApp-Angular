import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RatingComponent } from './components/rating/rating.component';
import { SearchInputValidationDirective } from './directives/search-input-validation.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PaginationComponent,
    RatingComponent,
    SearchInputValidationDirective,
  ],
  imports: [CommonModule, MatDialogModule, MatIconModule],
  exports: [
    PaginationComponent,
    RatingComponent,
    SearchInputValidationDirective,
  ],
})
export class SharedModule {}
