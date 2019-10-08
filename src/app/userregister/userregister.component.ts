import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
  constructor(private apiservice:ApiService) { }

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
      this.apiservice.rentregister(data.value).subscribe((response:any)=>{
        var result = response as string [];
        console.log(result);
        alert(result);
      });
    } 
  }

  ngOnInit() {
  }

}


 