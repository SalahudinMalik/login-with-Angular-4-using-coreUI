import { NgModule } from '@angular/core';

import { AgentComponent } from './agent.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
  imports: [
    ComponentsRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule
  ],
  declarations: [
    AgentComponent
  ]
})
export class ComponentsModule { }
