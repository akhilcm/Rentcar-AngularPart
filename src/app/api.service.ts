import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }

  rentregister(data)
  {
    return this.http.post("https://rentnodee.herokuapp.com/rentregister",data);
  }

  rentlogin(data)
  {
    return this.http.post("https://rentnodee.herokuapp.com/rentlogin",data);
  }

  rentforgotpwd(data)
  {
    return this.http.post("https://rentnodee.herokuapp.com/rentforgotpwd",data);
  }
  rentviewuser()
  {
    return this.http.get("https://rentnodee.herokuapp.com/rentviewuser");
  }
  rentuserstatus(data)
  {
    return this.http.post("https://rentnodee.herokuapp.com/rentuserstatus",data);
  }
  addcardata(data){
    return this.http.post("https://rentnodee.herokuapp.com/addcar",data);
  }
  viewcardata()
  {
    return this.http.get("https://rentnodee.herokuapp.com/vcar");
  }
  searchData(data){
    return this.http.post("https://rentnodee.herokuapp.com/search",data);
  }
  deleteData(data){
    return this.http.post("https://rentnodee.herokuapp.com/delete",data);
  }
  deleteData1(data){
    return this.http.post("https://rentnodee.herokuapp.com/delete1",data);
  }
  updateData(data){
    return this.http.post("https://rentnodee.herokuapp.com/update",data);
  }
  updateData1(data){
    return this.http.post("https://rentnodee.herokuapp.com/update1",data);
  }
  viewbooksingle(data)
  {
    return this.http.post("https://rentnodee.herokuapp.com/viewbooksingle",data);
  }
  booking(data)
  {
    return this.http.post("https://rentnodee.herokuapp.com/booking",data);
  }
  addbookcarData(data){
    return this.http.post("https://rentnodee.herokuapp.com/addbookcar",data);
  }
  viewbookcardata()
  {
    return this.http.get("https://rentnodee.herokuapp.com/vcar1");
  }
  feedData(data){
    return this.http.post("https://rentnodee.herokuapp.com/addfeed",data);
  }
  viewfeed()
  {
    return this.http.get("https://rentnodee.herokuapp.com/vfeed");
  }
}

