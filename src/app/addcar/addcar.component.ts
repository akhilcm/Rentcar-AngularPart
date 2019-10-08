import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {
  onSubmit(data:NgForm){
    console.log(data.value);
    this.apiservise.addcardata(data.value).subscribe((response)=>{
      console.log(response);
      alert("Successfully inserted");
    });
   
  }
constructor(private apiservise:ApiService ,private router:Router) { }
logout()
{
  localStorage.removeItem('uid');
  this.router.navigateByUrl('');
}
ngOnInit() {
}
}
