import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ApiService} from '../api.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  getName='';
  getFeedback='';
  mydata:Array<object>=[];

 

  constructor(private apiservice:ApiService) { }  
  onSubmit(data:NgForm){
    console.log(data.value);
    this.apiservice.feedData(data.value).subscribe((response)=>{
      console.log(response);
      alert("Successfully inserted");
    });  
  // onSubmit(data:NgForm){
  //   console.log(data.value);
  //   alert("Successfully inserted Thank You!");

  //   this.apiservice.feedData(data.value).subscribe((response)=>{
  //     console.log(response);
  //     alert("Successfully inserted Thank You!");
  //   });
   
  }

  ngOnInit() {
  }

}
