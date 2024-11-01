import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSearchInputValidation]',
})
export class SearchInputValidationDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = (event.target as HTMLInputElement).value;

    if (input.length < 3 || /[^a-zA-Z0-9]/.test(input)) {
      // Set title attribute for tooltip
      this.renderer.setAttribute(
        this.el.nativeElement,
        'title',
        'Minimum 3 alphanumeric characters required'
      );
      // Add an invalid CSS class
      this.renderer.addClass(this.el.nativeElement, 'invalid-input');
    } else {
      // Clear the tooltip and remove the invalid class
      this.renderer.setAttribute(this.el.nativeElement, 'title', '');
      this.renderer.removeClass(this.el.nativeElement, 'invalid-input');
    }
  }
}
