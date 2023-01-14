import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  constructor(private auth: AuthenticationService, private route: Router) { }

  ngOnInit() {}

  loginForm:FormGroup = new FormGroup({
    email : new FormControl('',[Validators.required])
  })

  submit(){
    
  }
}
