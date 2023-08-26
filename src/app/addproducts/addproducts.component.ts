import { Component } from "@angular/core";
import { ProductsService } from "../products.service";

@Component({
    selector : 'app-addproducts, [app-addpdtattr], .app-addpdtclass',
    templateUrl : './addproducts.component.html',
    styleUrls: ['./addproducts.component.css']
})

export class AddproductsComponent {

    productName : string = "Sony";

    productStatus : string = "Yet not created";

    arr : string[] = ["hi", "hello"];

    obj = {fname:"gopi", lname:"kris"};

    isCreate : boolean = false;

    paData1 = "Data 1 from Parent";

    paData2 = "Data 2 from Parent";

    paData3 = "Data 3 from Parent";

   // ps1 : any;

    constructor(public ps1 : ProductsService)
    {
        console.log("Add products component created");

        setTimeout(()=>{

            this.isCreate = true;

        }, 3000);

        //this.ps1 = new ProductsService();
    }

    doTest()
    {
        console.log("test");

        return "TEST";
    }

    createProduct()
    {
        //console.log("Product Create");

        this.productStatus = "Product Created "+this.productName;

        this.ps1.createProductList(this.productName);
    }

    createProduct2(event:any)
    {
        console.log(event);

        this.productStatus = "Product Created "+event.target.value;
    }

    changeStatus()
    {
        this.ps1.modifyStatus();
    }

    receiveDataFromChild(data:any)
    {
        console.log("Data Received from Child "+data);
    }

}