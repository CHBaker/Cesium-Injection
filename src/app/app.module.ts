import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { cesiumToken } from './cesium.lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: cesiumToken, useValue: Cesium}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
