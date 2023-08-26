import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

function domainEmailValidator(control : FormControl) : {[key:string] : boolean}
{
  let email : string = control.value;

    if(email && email.indexOf("@") != -1)
    {
        let domain = email.split("@")[1];

        console.log(domain);

        if(domain != "csz.com")
        {
          return {emailDomain : true}
        }
    }

    return null;
}

@Component({
  selector: 'app-reform',
  templateUrl: './reform.component.html',
  styleUrls: ['./reform.component.css']
})
export class ReformComponent implements OnInit {

  loginForm : FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      'username' : new FormControl(null, Validators.required),
      'useremail' : new FormControl(null, [Validators.required, Validators.email, domainEmailValidator]),
      'hobbies' : new FormArray([])
    });


    this.loginForm.patchValue({
      'username' : "gopi"      
    });

    this.loginForm.statusChanges.subscribe((status:any)=>{

       // console.log(status);
    });

    this.loginForm.valueChanges.subscribe((value:any)=>{

     // console.log(value);

    });

  }

  doLogin()
  {
    console.log(this.loginForm.value);

    (<FormArray>this.loginForm.get("hobbies")).controls = [];
    this.loginForm.reset();
  }

  get usernameCtrl()
  {
    return this.loginForm.get("username");
  }

  addHobby()
  {
    let control = new FormControl(null, Validators.required);

    (<FormArray>this.loginForm.get("hobbies")).push(control);
  }

  get hobbiesCtrl()
  {
    return (<FormArray>this.loginForm.get("hobbies")).controls;
  }

}
