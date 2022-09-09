import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddFormRoutingModule } from './add-form-routing.module';
import { AddFormComponent } from './components/add-form/add-form.component';


@NgModule({
  declarations: [
    AddFormComponent
  ],
  imports: [
    CommonModule,
    AddFormRoutingModule
  ]
})
export class AddFormModule { }
