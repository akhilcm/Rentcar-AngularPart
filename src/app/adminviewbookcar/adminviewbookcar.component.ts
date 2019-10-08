import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminviewbookcar',
  templateUrl: './adminviewbookcar.component.html',
  styleUrls: ['./adminviewbookcar.component.css']
})
export class AdminviewbookcarComponent implements OnInit {
  mydata:Array<object>=[];

  constructor(private apiservice:ApiService,private router:Router) { }
  logout()
  {
    localStorage.removeItem('uid');
    this.router.navigateByUrl('');
  }
  ngOnInit() {
    this.apiservice.viewbookcardata().subscribe((response:Array<object>)=>{
      console.log(response);
      this.mydata=response;
    });
  }
}