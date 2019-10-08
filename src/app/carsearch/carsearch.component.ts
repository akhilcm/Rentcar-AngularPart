import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carsearch',
  templateUrl: './carsearch.component.html',
  styleUrls: ['./carsearch.component.css']
})
export class CarsearchComponent implements OnInit {
  private mydata:Array<object> = [];
  
  constructor(private apiservice:ApiService,private router:Router) { }
  

  onSubmit(data:NgForm)
  {
    console.log(data.value);
    this.apiservice.searchData(data.value).subscribe((response:Array<object>)=>{
      console.log(response);
      this.mydata=response;
    });
  }

  deletecar()
 {
   console.log(this.mydata[0]);
   this.apiservice.deleteData(this.mydata[0]).subscribe((response:Array<object>)=>{
     if(response.length>0){
       alert('deleted');
     }
   })
 }
 updatecar()
 {
   console.log(this.mydata[0]);
   this.apiservice.updateData(this.mydata[0]).subscribe((response:Array<object>)=>{
     if(response.length>0){
       alert('updated')
     }
   })
 }
 logout()
 {
   localStorage.removeItem('uid');
   this.router.navigateByUrl('');
 }
  ngOnInit() {
  }

}


