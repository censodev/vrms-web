import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemiDatatableComponent } from './semi-datatable.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SemiDatatableComponent
  ],
  exports: [
    SemiDatatableComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzIconModule,
    NzButtonModule,
    NzInputModule,
    ReactiveFormsModule,
  ]
})
export class SemiDatatableModule { }
