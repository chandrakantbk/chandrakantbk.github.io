import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo.routing.module';
import { DemosListComponent } from './demos-list/demos-list.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';



@NgModule({
  declarations: [DemosListComponent, PasswordGeneratorComponent],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemosModule { }
