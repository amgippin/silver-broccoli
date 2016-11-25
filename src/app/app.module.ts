import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { BannerModule } from './banner/banner.module';
import { WorkspaceModule } from './workspace/workspace.module';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, Ng2BootstrapModule, BannerModule, WorkspaceModule ],
  declarations:	[ AppComponent ],
  bootstrap:	[ AppComponent ]
})

export class AppModule { }