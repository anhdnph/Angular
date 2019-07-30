import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CateItemComponent } from './components/cate-item/cate-item.component';
import { HomeComponent } from './secreens/home/home.component';
import { CateAddComponent } from './secreens/cate-add/cate-add.component';
import { DetailCateComponent } from './secreens/detail-cate/detail-cate.component';
import { CateEditComponent } from './secreens/cate-edit/cate-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CateItemComponent,
    HomeComponent,
    CateAddComponent,
    DetailCateComponent,
    CateEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
