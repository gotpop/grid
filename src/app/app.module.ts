import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GpHeaderComponent } from './gp-header/gp-header.component';
import { GpAsideComponent } from './gp-aside/gp-aside.component';
import { GpFooterComponent } from './gp-footer/gp-footer.component';
import { GpMainComponent } from './gp-main/gp-main.component';


@NgModule({
  declarations: [
    AppComponent,
    GpHeaderComponent,
    GpAsideComponent,
    GpFooterComponent,
    GpMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
