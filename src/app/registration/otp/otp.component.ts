import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  constructor(private auth: AuthenticationService, private route: Router) { }

  ngOnInit() {}

  loginForm:FormGroup = new FormGroup({
    email : new FormControl('',[Validators.required])
  })

  submit(){
    
  }
}