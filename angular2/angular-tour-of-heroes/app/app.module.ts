import { NgModule }      from '@angular/core';
/*Since the QuickStart application is a web application that runs in a browse*/
import { BrowserModule } from '@angular/platform-browser';
/*two-way data binding for form inputs*/
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations:	[ AppComponent ],
  bootstrap:	[ AppComponent ]
})

export class AppModule { }