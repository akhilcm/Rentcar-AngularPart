import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
// import { CarDto } from '@angular/core';
import { ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-userviewcar',
  templateUrl: './userviewcar.component.html',
  styleUrls: ['./userviewcar.component.css'],

})
export class UserviewcarComponent implements OnInit {
  @Input()

  @Output()
  // selectCar = new EventEmitter<>();
  mydata:Array<object>=[];

  constructor(private apiservice:ApiService,private router:Router) { }
  public text: string = 'Book Now';
  changeText(): void {
    if(this.text === 'Book Now') { 
      this.text = 'Booked'
    } else {
      this.text = 'Book Now'
    }
  }
  // bookcar(){
    
  //   console.log(this.mydata[0]);
  //   this.apiservice.updateData(this.mydata[0]).subscribe((response:Array<object>)=>{
  //     // if(response.length>0){
  //     //   alert('book car')
  //     // }
  //     });
  //   }
    bookcar(){
    
      console.log(this.mydata[0]);

      this.apiservice.deleteData(this.mydata[0]).subscribe((response:Array<object>)=>{
        if(response.length>0){
          alert('BookCar');
        }
      })
      this.router.navigateByUrl('bookcar');
    }
     
    
  ngOnInit() {
    this.apiservice.viewcardata().subscribe((response:Array<object>)=>{
      console.log(response);
      this.mydata=response;
    });
  }
}