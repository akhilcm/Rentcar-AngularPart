import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }

  rentregister(data)
  {
    return this.http.post("http://localhost:3003/rentregister",data);
  }

  rentlogin(data)
  {
    return this.http.post("http://localhost:3003/rentlogin",data);
  }

  rentforgotpwd(data)
  {
    return this.http.post("http://localhost:3003/rentforgotpwd",data);
  }
  rentviewuser()
  {
    return this.http.get("http://localhost:3003/rentviewuser");
  }
  rentuserstatus(data)
  {
    return this.http.post("http://localhost:3003/rentuserstatus",data);
  }
  addcardata(data){
    return this.http.post("http://localhost:3003/addcar",data);
  }
  viewcardata()
  {
    return this.http.get("http://localhost:3003/vcar");
  }
  searchData(data){
    return this.http.post("http://localhost:3003/search",data);
  }
  deleteData(data){
    return this.http.post("http://localhost:3003/delete",data);
  }
  deleteData1(data){
    return this.http.post("http://localhost:3003/delete1",data);
  }
  updateData(data){
    return this.http.post("http://localhost:3003/update",data);
  }
  updateData1(data){
    return this.http.post("http://localhost:3003/update1",data);
  }
  viewbooksingle(data)
  {
    return this.http.post("http://localhost:3003/viewbooksingle",data);
  }
  booking(data)
  {
    return this.http.post("http://localhost:3003/booking",data);
  }
  addbookcarData(data){
    return this.http.post("http://localhost:3003/addbookcar",data);
  }
  viewbookcardata()
  {
    return this.http.get("http://localhost:3003/vcar1");
  }
  feedData(data){
    return this.http.post("http://localhost:3003/addfeed",data);
  }
  viewfeed()
  {
    return this.http.get("http://localhost:3003/vfeed");
  }
}

