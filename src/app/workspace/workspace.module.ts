import { NgModule }      from '@angular/core';
import { WorkspaceComponent } from './workspace/workspace/workspace.component'
import { SidebarComponent } from './worksspace/sidbar/sidebar.component';
import { ViewareaComponent } from './workspace/viewarea/viewarea.component';

@NgModule({
  declarations:	[ WorkspaceComponent, SidebarComponent, ViewareaComponent ],
  bootstrap:	[ WorkspaceComponent ]
})

export class WorkspaceComponent { }