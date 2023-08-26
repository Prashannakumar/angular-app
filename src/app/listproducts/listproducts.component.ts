import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class ListproductsComponent implements OnInit {

  products : string[] = [];

  viewMode : string = "personal";

  page = "home";

  searchVal : string = '';

  @Input() myPaData1 : string = '';   // default

  @Input("myPaData2") paData2 : string = '';    // Alias

  paData3 : string = '';

  @Input() set myPaData3(val:string)          // Set method
  {
    console.log(val);
    this.paData3 = val;
  }

  //ps2:any;

  constructor(public ps2 : ProductsService) {

   // this.ps2 = new ProductsService();

    this.products = this.ps2.getProductsList();
   }

    @Output()  onMyButtonClick = new EventEmitter();

  ngOnInit(): void {
  }

  onMyKeyUp(event:any)
  {

   // console.log(event);

    console.log("You have pressed some keys");

    if(event.keyCode == 13)
    {
      console.log("You have pressed Enter key");
    }


  }

  sendDataToParent()
  {
    this.onMyButtonClick.emit(new Date());
  }

}
