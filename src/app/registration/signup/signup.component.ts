import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private auth:AuthenticationService, private route: Router) { }
  ngOnInit() {}
  
  signup:FormGroup = new FormGroup({
    name : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    confirmPassword : new FormControl('',Validators.required)  
  })

  signUp(){
    // console.log(this.signup);
    if(this.signup.valid){
      this.auth.emailSignup(this.signup.value.email, this.signup.value.password)
      .then(()=>{
        this.route.navigate(['/registration/login']);
        this.signup.reset();
        // alert("Signed up!");
      })
      .catch((error:any)=>alert("error in signup"))
    }else{
      alert("Invalid Signup Form")
    }
  }

  googleSignup(){
    this.auth.googleLogin()
  }
}
