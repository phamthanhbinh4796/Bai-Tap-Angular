import { Directive, ElementRef, HostListener} from '@angular/core';
import { element } from '@angular/core/src/render3';

@Directive({
  selector: '[appDropdownlist]'
})
export class DopdownlistDirective { 
  constructor(private el: ElementRef) {
  }
  @HostListener('mouseenter') onmouseenter() {
    this.openDropDownList();
  }
  @HostListener('mouseleave') onmouseleave() {
    this.closeDropdownList();
  }

  private openDropDownList(){
    this.el.nativeElement.classList.add ('dropdown', 'open');
  }
  private closeDropdownList(){
    this.el.nativeElement.classList.remove('open');
  }
}
