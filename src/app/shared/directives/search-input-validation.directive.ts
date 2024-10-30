import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSearchInputValidation]',
})
export class SearchInputValidationDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: any): void {
    const input = event.target.value;
    if (input.length < 3 || /[^a-zA-Z0-9]/.test(input)) {
      this.el.nativeElement.setCustomValidity(
        'Minimum 3 alphanumeric characters required'
      );
    } else {
      this.el.nativeElement.setCustomValidity('');
    }
  }
}
