import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations:	[ AppComponent, WorkspaceComponent, BannerComponent ],
  bootstrap:	[ AppComponent ]
})

export class AppModule { }