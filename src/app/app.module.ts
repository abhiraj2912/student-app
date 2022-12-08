import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StudentViewComponent } from './student-view/student-view.component';
import { HttpClientModule } from '@angular/common/http'

const myRoute:Routes=[
  {
    path:"",
    component:StudentAddComponent
  },
  {
    path:"view",
    component:StudentViewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    StudentAddComponent,
    NavbarComponent,
    StudentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
