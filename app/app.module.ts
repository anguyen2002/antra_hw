import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChangeColorDirective } from './tasklist/change-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    ChangeColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
