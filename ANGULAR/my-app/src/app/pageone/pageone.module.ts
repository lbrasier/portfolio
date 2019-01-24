import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ViewoneComponent } from './viewone.component';
import { SharedModule } from "../shared/shared.module";


const appRoutes: Routes = [
  { path: 'p1', component: ViewoneComponent }
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: [ViewoneComponent]
})
export class PageoneModule { }
