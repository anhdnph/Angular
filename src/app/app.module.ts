import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CateItemComponent } from './components/cate-item/cate-item.component';
import { HomeComponent } from './secreens/home/home.component';
import { CateAddComponent } from './secreens/cate-add/cate-add.component';
import { DetailCateComponent } from './secreens/detail-cate/detail-cate.component';
import { CateEditComponent } from './secreens/cate-edit/cate-edit.component';
import { AddProductComponent } from './secreens/products/add-product/add-product.component';
import { EditProductComponent } from './secreens/products/edit-product/edit-product.component';
import { ProductComponent } from './secreens/products/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    CateItemComponent,
    HomeComponent,
    CateAddComponent,
    DetailCateComponent,
    CateEditComponent,
    AddProductComponent,
    EditProductComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
