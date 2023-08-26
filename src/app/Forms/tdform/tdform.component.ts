import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent implements OnInit {

  formData = {name:'', email:'', address:''};

  userName = "Gopikrishna";

  userEmail = "gopi@gmail.com";

  userPassword = 45345435;

  userCountry = "ind";

  userAddress = "Velachery";

  userGender = "male";

  userAccept = true;

  constructor() { }

  ngOnInit(): void {
  }

  onMyFormSubmit(form:NgForm)
  {
    console.log(this.userName);
    
    console.log(form.value);
  //  console.log("Form Submitted");

  this.formData.name = form.value.uname;
  this.formData.email = form.value.uemail;
  this.formData.address = form.value.uaddress;
  }

}
