import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ModalComponent } from './components/modal/modal.component';
import { RatingComponent } from './components/rating/rating.component';
import { SearchInputValidationDirective } from './directives/search-input-validation.directive';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    PaginationComponent,
    ModalComponent,
    RatingComponent,
    SearchInputValidationDirective,
  ],
  imports: [CommonModule],
  exports: [PaginationComponent],
})
export class SharedModule {}
