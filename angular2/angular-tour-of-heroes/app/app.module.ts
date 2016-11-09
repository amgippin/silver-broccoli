import { NgModule }      from '@angular/core';
/*Since the QuickStart application is a web application that runs in a browse*/
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations:	[ AppComponent ],
  bootstrap:	[ AppComponent ]
})

export class AppModule { }