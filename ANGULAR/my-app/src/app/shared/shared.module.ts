import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadermenuComponent } from './headermenu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HeadermenuComponent],
  declarations: [HeadermenuComponent]
})
export class SharedModule { }
