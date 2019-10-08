import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css']
})
export class ViewfeedbackComponent implements OnInit {
  mydata:Array<object>=[];


  constructor(private apiservice:ApiService,private router:Router) { }
  logout()
  {
    localStorage.removeItem('uid');
    this.router.navigateByUrl('');
  }

  
  ngOnInit() {
    this.apiservice.viewfeed().subscribe((response:Array<object>)=>{
      console.log(response);
      this.mydata=response;
    });
  }

}
