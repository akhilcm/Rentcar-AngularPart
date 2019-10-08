import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search1',
  templateUrl: './search1.component.html',
  styleUrls: ['./search1.component.css']
})
export class Search1Component implements OnInit {
  private mydata:Array<object> = [];
  
  constructor(private apiservice:ApiService){}

  onSubmit(data:NgForm)
  {
    console.log(data.value);
    this.apiservice.searchData(data.value).subscribe((response:Array<object>)=>{
      console.log(response);
      this.mydata=response;
    });
  }
  ngOnInit() {
  }

}




