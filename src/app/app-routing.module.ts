import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
const routes: Routes = [
  {
     path: 'home', component: HomeComponent
  },
  {
     path:'', redirectTo: 'home', pathMatch: 'full'
  },
  {
     path: 'news', component: NewsComponent
  }
];
@NgModule({

  imports: [
  RouterModule.forRoot(routes),
  CommonModule
],

exports: [RouterModule]

}) 

export class AppRoutingModule { }
