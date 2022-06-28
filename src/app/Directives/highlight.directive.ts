import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

  constructor(public element:ElementRef) {
      this.element.nativeElement.style.color = 'greenyellow'
      this.element.nativeElement.style.fontWeight = 'bold '
   }

   @HostListener('mouseenter') onMouseEnter() {
    // this.highlight('red');
    this.element.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.highlight('');
    this.element.nativeElement.style.color = 'greenYellow';
  }

  // private highlight(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }

}
