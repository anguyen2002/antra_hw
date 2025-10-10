import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-list/task-detail/task-detail.component';
import { ChangeBorderColorDirective } from './task-list/change-border-color.directive';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StatusFilterPipe } from './task-list/status-filter.pipe';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { TitleColorComponent } from './title-color/title-color.component';
import { ButtonControlComponent } from './title-color/button-control/button-control.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailComponent,
    ChangeBorderColorDirective,
    StatusFilterPipe,
    ProductsComponent,
    TitleColorComponent,
    ButtonControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
