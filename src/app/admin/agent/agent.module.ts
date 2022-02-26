import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";


@NgModule({
  declarations: [
    AgentComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule,
    NzTableModule,
    NzDividerModule
  ]
})
export class AgentModule { }
