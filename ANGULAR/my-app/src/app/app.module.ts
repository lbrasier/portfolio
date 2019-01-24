import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PagetwoModule } from "./pagetwo/pagetwo.module";
import { PageoneModule } from "./pageone/pageone.module";
import { ErrorhandlerComponent } from "./errorhandler.component";
import { SharedModule } from "./shared/shared.module";

const appRoutes: Routes = [
  { path: '', component: ErrorhandlerComponent },
  { path: '**', component: ErrorhandlerComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ErrorhandlerComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PageoneModule,
    PagetwoModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
