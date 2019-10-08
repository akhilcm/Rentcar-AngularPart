import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit() {
    const userid = localStorage.getItem('uid');
    console.log('User ID :'+userid);

    if(userid === null)
    {
      this.router.navigateByUrl('userregister');
    }
  }

  logout()
  {
    localStorage.removeItem('uid');
    this.router.navigateByUrl('');
  }

}