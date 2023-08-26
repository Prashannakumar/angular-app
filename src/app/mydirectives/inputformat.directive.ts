import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputformat]'
})
export class InputformatDirective {

 // @Input() format : string = '';    // default method

  @Input("appInputformat")  format : string = '';   // alias method

  constructor(public elRef : ElementRef) { }

  @HostListener("blur") onMyBlur()
  {
    console.log(this.format);

    var str : string = this.elRef.nativeElement.value;

    if(this.format=="lower")
    {
      this.elRef.nativeElement.value = str.toLowerCase();
    }
    else {
      this.elRef.nativeElement.value = str.toUpperCase();
    }

    
  }

}
