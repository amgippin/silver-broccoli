import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { BannerComponent } from './banner.component';

@NgModule({
	imports: [ BrowserModule, FormsModule, Ng2BootstrapModule ],
	declarations: [ BannerComponent ],
	exports: [ BannerComponent ]
})

export class BannerModule { }