import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public elRef : ElementRef) {

    console.log("Highlight directive created");

   // this.elRef.nativeElement.style.backgroundColor = "red";

   }

   @HostListener("mouseover") onMyMouseOver(){

    this.elRef.nativeElement.style.backgroundColor = "red";

   }

   @HostListener("mouseleave") onMyMouseLeave() {

    this.elRef.nativeElement.style.backgroundColor = "transparent";

   }

}
