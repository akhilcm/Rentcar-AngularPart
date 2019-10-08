import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { HttpClientModule } from '@angular/common/http';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddcarComponent } from './addcar/addcar.component';
import { ViewcarComponent } from './viewcar/viewcar.component';
import { CarsearchComponent } from './carsearch/carsearch.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserviewcarComponent } from './userviewcar/userviewcar.component';
import { BookcarComponent } from './bookcar/bookcar.component';
import { Search1Component } from './search1/search1.component';
import { AdminviewbookcarComponent } from './adminviewbookcar/adminviewbookcar.component';
import { FooterComponent } from './contact/footer.component';
import { UserorderdetailsComponent } from './userorderdetails/userorderdetails.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';

const appRoutes:Routes = [
  {path:'',component:UserloginComponent},
  {path:'userlogin',component:UserloginComponent},

  {path:'register',component:UserregisterComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'forgotpwd',component:ForgotpasswordComponent},
  {path:'adminpage',component:AdminpageComponent},
  {path:'addcar',component: AddcarComponent},
  {path:'viewcar',component: ViewcarComponent},
  {path: 'search',component:CarsearchComponent},
  {path: 'search1',component:Search1Component},
  {path: 'userhome',component:UserhomeComponent},
  {path: 'userviewcar', component:UserviewcarComponent},
  {path: 'bookcar', component:BookcarComponent},
  {path: 'adminviewbookcar', component:AdminviewbookcarComponent },
  {path: 'footer', component:FooterComponent},
  {path: 'orderd', component:UserorderdetailsComponent},
  {path: 'vfeed', component:ViewfeedbackComponent}




  
];
@NgModule({
  declarations: [
    AppComponent,
    UserregisterComponent,
    UserloginComponent,
    ForgotpasswordComponent,
    AdminpageComponent,
    AdminloginComponent,
    AddcarComponent,
    ViewcarComponent,
    CarsearchComponent,
    UserhomeComponent,
    UserviewcarComponent,
    BookcarComponent,
    Search1Component,
    AdminviewbookcarComponent,
    FooterComponent,
    UserorderdetailsComponent,
    ViewfeedbackComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
