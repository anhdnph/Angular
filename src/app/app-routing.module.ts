import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} 
		from './secreens/home/home.component';
import {DetailCateComponent} 
		from './secreens/detail-cate/detail-cate.component';
import {CateAddComponent} 
		from './secreens/cate-add/cate-add.component';
import {CateEditComponent} 
		from './secreens/cate-edit/cate-edit.component';		

const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "category/add",
		component: CateAddComponent
	},
	{
		path: "cate-edit/:id",
		component: CateEditComponent
	},
	{
		path: "detail/:id",
		component: DetailCateComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }