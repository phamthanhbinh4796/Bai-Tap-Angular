import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogout]'
})
export class LogoutDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseover') onMouseEnter() {
    this.openLogout();
  }
  @HostListener('mouseleave') onMouseOver() {
    this.closeLogout();
  }
  private openLogout() {
    this.el.nativeElement.getElementsByClassName('mock')[0].classList.remove('hoverdrop');
  }
  private closeLogout() {
    this.el.nativeElement.getElementsByClassName('mock')[0].classList.add('hoverdrop');
  }

}