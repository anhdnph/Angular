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
import {ProductComponent} 
		from './secreens/products/product/product.component';
import {EditProductComponent} 
		from './secreens/products/edit-product/edit-product.component';
import {AddProductComponent} 
		from './secreens/products/add-product/add-product.component';		

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
	},
	{
    path: ':category-id/products',
    component: ProductComponent
  	},
  	{
    path: 'category-id/products/:id/edit',
    component: EditProductComponent
  	},
  	{
    path: ':category-id/products/add',
    component: AddProductComponent
  	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }