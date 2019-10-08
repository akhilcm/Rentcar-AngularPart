import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

   getUemail:'';
   getUpass:'';
  mydata:Array<object>=[];

  constructor(private apiservice:ApiService,private router:Router) { }

  onSubmit(data:NgForm)
  {
    this.apiservice.rentlogin(data.value).subscribe((response:any)=>{
      console.log(response);
      this.mydata=response;
      if(response.length > 0)
      {
        alert('Login Successfull');
        this.router.navigateByUrl('userhome');

      }
      else
      {
        alert('Login Unsuccessfull');
      }
    });
  }

  ngOnInit() {
  }

}
