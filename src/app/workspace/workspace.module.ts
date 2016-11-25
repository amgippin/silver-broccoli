import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { ExcelViewModule } from './excel/excel-view.module';
import { SingleViewModule } from './single/single-view.module';

import { WorkspaceComponent } from './workspace.component';

@NgModule({
	imports: [ BrowserModule, FormsModule, Ng2BootstrapModule, ExcelViewModule, SingleViewModule ],
	declarations:	[ WorkspaceComponent ],
	exports: [ WorkspaceComponent ]
})

export class WorkspaceModule { }