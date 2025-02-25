import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() totalPages: number = 1;
  @Input() currentPage: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(++this.currentPage);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(--this.currentPage);
    }
  }
}
