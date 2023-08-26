import { Injectable } from "@angular/core";

@Injectable({
providedIn : "root"
})
export class ProductsService {

    accountStatus = "Inactive";

    productsList = ["sony", "dell", "samsung", "lenovo"];

    paymentDetails = [{name:"Gopi", price:45, ccnumber:45345323423432}, 
                        {name:"Gopi", price:45, ccnumber:45345323423432}];

    constructor()
    {
        console.log("Service instance created");
    }

    createProductList(pdtName:string)
    {
        this.productsList.push(pdtName);
    }

    getProductsList()
    {
        return this.productsList;
    }

    modifyStatus()
    {
        this.accountStatus = (this.accountStatus=="Inactive") ? "Active" : "Inactive";
    }
}