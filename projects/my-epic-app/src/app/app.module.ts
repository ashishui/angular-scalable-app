import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgComponentsVmshModule } from 'ng-components-vmsh';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, NgComponentsVmshModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
