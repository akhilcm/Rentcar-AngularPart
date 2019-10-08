import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookcar',
  templateUrl: './bookcar.component.html',
  styleUrls: ['./bookcar.component.css']
})
export class BookcarComponent implements OnInit {


  private mydata:Array<object> = [];
  
  
  constructor(private apiservice:ApiService){}
  onSubmit(data:NgForm){
    console.log(data.value);
    this.apiservice.addbookcarData(data.value).subscribe((response)=>{
      console.log(response);
      alert("Successfully inserted");
    });
   
  }
  
  // onSubmit(data:NgForm){
  //   console.log(data.value);
  //   this.apiservice.addcardata(data.value).subscribe((response)=>{
  //     console.log(response);
  //     alert("book your car");
  //   });
   
  // }
  
  rent() {
    // console.log(this.mydata[0]);

    alert("Book Your Car");
   this.apiservice.updateData1(this.mydata[0]).subscribe((response:Array<object>)=>{
     
     if(response.length>0){
       alert('rented');
     }
   })

  }

  ngOnInit() {
    this.apiservice.viewbookcardata().subscribe((response:Array<object>)=>{
      console.log(response);
      this.mydata=response;
      alert("Please use your Adharid/Licenceid")
    });
  }
  
  
  
  //   console.log(this.mydata[0]);
  //   this.apiservice.updateData(this.mydata[0]).subscribe((response:Array<object>)=>{
  //     if(response.length>0){
  //       alert('updated')
  //     }
  //   })
  // }


  
  }

