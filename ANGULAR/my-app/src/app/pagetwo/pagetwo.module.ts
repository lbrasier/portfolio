import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ViewtwoComponent } from './viewtwo.component';
import { SharedModule } from "../shared/shared.module";

const appRoutes: Routes = [
  { path: 'p2', component: ViewtwoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: [ViewtwoComponent]
})
export class PagetwoModule { }
