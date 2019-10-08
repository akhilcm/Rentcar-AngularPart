import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  constructor(private apiservice:ApiService,private router:Router) { }

  getpwd= '';
  getcpwd = '';

  onSubmit(data:NgForm)
  {
    console.log(data.value);

    this.getpwd = data.value.upass;
    this.getcpwd = data.value.ucpass;
    if(this.getpwd != this.getcpwd )
    {
      alert("Passwords don't match");
    }
    else
    {
      this.apiservice.rentforgotpwd(data.value).subscribe((response:any)=>{
        var result = response as string [];
        console.log(result);
        alert(result);
      });
    }
  }

  ngOnInit() {
  }

}
