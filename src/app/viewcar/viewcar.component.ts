import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewcar',
  templateUrl: './viewcar.component.html',
  styleUrls: ['./viewcar.component.css']
})
export class ViewcarComponent implements OnInit {

  mydata:Array<object>=[];

  constructor(private apiservice:ApiService,private router:Router) { }
  logout()
  {
    localStorage.removeItem('uid');
    this.router.navigateByUrl('');
  }
  ngOnInit() {
    this.apiservice.viewcardata().subscribe((response:Array<object>)=>{
      console.log(response);
      this.mydata=response;
    });
  }
 
}
